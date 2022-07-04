import { createStyles, Table } from '@mantine/core'
import { memo } from 'react'
import { User } from '../models/user'

const useStyles = createStyles(theme => ({
  selectedRow: {
    backgroundColor: theme.colors.blue,
    color: 'white',
  },
}))

interface Props {
  users: User[]
  selectedUser: User | null
  onSelect: (user: User, index: number) => void
}

export const UsersList = memo(function UsersList({
  users,
  selectedUser,
  onSelect,
}: Props) {
  const { classes, cx } = useStyles()
  return (
    <Table
      horizontalSpacing='xs'
      verticalSpacing='xs'
      sx={{
        '& > thead > tr > th': {
          textAlign: 'center',
          padding: 'xs',
        },
        '& > tbody > tr > td': {
          textAlign: 'center',
          paddingTop: 'xs',
          paddingBottom: 'xs',
          paddingLeft: 1,
          paddingRight: 1,
        },
      }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            key={index}
            onClick={() => onSelect(user, index)}
            className={cx({ [classes.selectedRow]: user === selectedUser })}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
})
