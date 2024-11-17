import { forwardRef } from 'react'
import type { Ref, PropsWithChildren } from 'react'
import { BoxComponentProps, Box as ManBox } from '@mantine/core'

type BoxProps = {
} & BoxComponentProps

const BaseBox = (props: PropsWithChildren<BoxProps>, ref: Ref<any>) => {
  const { children, ...rest } = props

  return (
    <ManBox ref={ref} {...rest}>
        {children} 
    </ManBox>
  )
}

export const Box = forwardRef(BaseBox)