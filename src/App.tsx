import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  Group,
  MantineProvider,
  Navbar,
} from '@mantine/core'
import { useDisclosure, useLocalStorage } from '@mantine/hooks'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Edit, MoonStars, Plus, Sun, Trash } from 'tabler-icons-react'
import { Configuration } from '../configuration'
import { UsersApi } from './api/users-api'
import { ResponsiveButton } from './components/ResponsiveButton'
import { UserForm } from './components/UserForm'
import { UsersList } from './components/UsersList'
import { User } from './models'

export function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = useCallback(
    () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark'),
    [setColorScheme, colorScheme],
  )

  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [userFormOpened, userFormHandlers] = useDisclosure(false)
  const [mode, setMode] = useState<'add' | 'edit'>('add')

  const usersApi = useMemo(() => {
    return new UsersApi(new Configuration({ basePath: '' }))
  }, [])

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    ;(async () => {
      const resp = await usersApi.all()
      setUsers(resp.data)
    })()
  }, [usersApi, setUsers])

  const handleAddClicked = useCallback(() => {
    setMode('add')
    userFormHandlers.open()
  }, [setMode, userFormHandlers])

  const handleEditClicked = useCallback(() => {
    setMode('edit')
    userFormHandlers.open()
  }, [setMode, userFormHandlers])

  const handleDeleteClicked = useCallback(() => {
    setUsers(users.filter(x => x !== selectedUser))
    ;(async () => {
      await usersApi._delete(selectedUser!.id)
      setSelectedUser(null)
    })()
  }, [users, selectedUser, usersApi])

  const handleModalConfirm = useCallback(
    (user: User) => {
      userFormHandlers.close()
      ;(async () => {
        if (mode === 'add') {
          const newUser = { ...user, id: undefined }
          const resp = await usersApi.create(newUser)
          setUsers([...users, resp.data])
        } else {
          await usersApi.update(user.id, user)
          setUsers(users.map(x => (x.id === user.id ? user : x)))
        }
      })()
    },
    [userFormHandlers, mode, usersApi, users],
  )

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS>
        <AppShell
          navbar={
            <Navbar p='xs' width={{ base: 60, md: 300 }}>
              <Group direction='column' mb='auto' spacing='xs' grow>
                <ResponsiveButton
                  label='Add'
                  color='green'
                  icon={<Plus />}
                  breakpoint='md'
                  onClick={handleAddClicked}
                />
                {selectedUser && (
                  <>
                    <ResponsiveButton
                      label='Edit'
                      color='blue'
                      icon={<Edit />}
                      breakpoint='md'
                      onClick={handleEditClicked}
                    />

                    <ResponsiveButton
                      label='Delete'
                      color='red'
                      icon={<Trash />}
                      breakpoint='md'
                      onClick={handleDeleteClicked}
                    />
                  </>
                )}
              </Group>

              <Group direction='column' grow>
                <ResponsiveButton
                  label='Toggle theme'
                  color={colorScheme === 'dark' ? 'yellow' : 'dark'}
                  icon={colorScheme === 'dark' ? <Sun /> : <MoonStars />}
                  breakpoint='md'
                  onClick={toggleColorScheme}
                />
              </Group>
            </Navbar>
          }>
          <UsersList
            users={users}
            selectedUser={selectedUser}
            onSelect={setSelectedUser}
          />

          <UserForm
            value={mode === 'edit' ? selectedUser : null}
            opened={userFormOpened}
            onClose={userFormHandlers.close}
            onConfirm={handleModalConfirm}
          />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
