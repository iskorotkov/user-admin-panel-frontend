import { Button, Group, Modal, Select, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { memo, useEffect, useRef } from 'react'
import { defaultGender, genders } from '../data/genders'
import { User } from '../models'

interface Props {
  value: User | null
  opened: boolean
  onClose: () => void
  onConfirm: (user: User) => void
}

export const defaultUser = () => ({
  id: 0, // We don't assign IDs to entities on frontend.
  name: '',
  phone: '',
  email: '',
  gender: defaultGender,
})

export const UserForm = memo(function UserForm({
  value,
  opened,
  onClose,
  onConfirm,
}: Props) {
  const form = useForm({
    initialValues: value ?? defaultUser(),
    validate: {
      name: name => (name.length > 0 ? null : "Name can't be empty"),
      phone: phone => (phone.length > 0 ? null : "Phone can't be empty"),
      email: email => (/^\S+@\S+\.\S+$/.test(email) ? null : 'Invalid email'),
    },
  })

  const lastOpened = useRef(opened)

  useEffect(() => {
    if (opened !== lastOpened.current) {
      lastOpened.current = opened
      form.setValues(value ?? defaultUser())
    }
  }, [form, opened, value])

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={`Editing ${form.values.name || 'new user'}`}>
      <form onSubmit={form.onSubmit(onConfirm)} onReset={onClose}>
        <TextInput
          data-autofocus
          label='Name'
          placeholder='John Doe'
          {...form.getInputProps('name')}
        />
        <TextInput
          label='Phone'
          placeholder='+7 (999) 999-99-99'
          {...form.getInputProps('phone')}
        />
        <TextInput
          label='Email'
          placeholder='john.doe@mail.com'
          {...form.getInputProps('email')}
        />
        <Select
          label='Gender'
          data={genders}
          defaultValue={defaultGender}
          {...form.getInputProps('gender')}
        />

        <Group mt='md' position='right'>
          <Button color='green' type='submit'>
            Save
          </Button>
          <Button color='red' type='reset'>
            Cancel
          </Button>
        </Group>
      </form>
    </Modal>
  )
})
