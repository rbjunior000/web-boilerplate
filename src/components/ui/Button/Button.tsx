import { forwardRef } from 'react'
import type { Ref, PropsWithChildren } from 'react'
import { Button as ManButton } from '@mantine/core'

type ButtonProps = {
}

const BaseButton = (props: PropsWithChildren<ButtonProps>, ref: Ref<any>) => {
  const { children, ...rest } = props

  return (
    <ManButton ref={ref} {...rest}>
        {children} 
    </ManButton>
  )
}

export const Button = forwardRef(BaseButton)