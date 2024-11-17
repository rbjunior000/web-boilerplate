import { Group as ManGroup, GroupProps as ManGroupProps } from '@mantine/core'
import type { PropsWithChildren, Ref } from 'react'
import { forwardRef } from 'react'

type GroupProps = {} & ManGroupProps

const BaseGroup = (props: PropsWithChildren<GroupProps>, ref: Ref<any>) => {
  const { children, ...rest } = props

  return (
    <ManGroup ref={ref} {...rest}>
      {children}
    </ManGroup>
  )
}

export const Group = forwardRef(BaseGroup)
