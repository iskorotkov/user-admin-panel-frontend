import {
  Button,
  MantineColor,
  MantineNumberSize,
  MediaQuery,
  Text,
} from '@mantine/core'
import { memo, MouseEventHandler, ReactNode } from 'react'

interface Props {
  label: string
  color: MantineColor
  icon: ReactNode
  breakpoint: MantineNumberSize
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const ResponsiveButton = memo(function ResponsiveButton({
  label,
  color,
  icon,
  breakpoint,
  onClick,
}: Props) {
  return (
    <Button p={0} color={color} onClick={onClick}>
      {icon}
      <MediaQuery smallerThan={breakpoint} styles={{ display: 'none' }}>
        <Text>{label}</Text>
      </MediaQuery>
    </Button>
  )
})
