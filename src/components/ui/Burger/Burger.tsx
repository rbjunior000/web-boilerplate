import { Burger as ManBurger, BurgerProps as ManBurgerProps } from '@mantine/core'
import type { PropsWithChildren, Ref } from 'react'
import { forwardRef } from 'react'

type BurgerProps = {
  opened: boolean
  onClick: () => void
  hiddenFrom: ManBurgerProps['hiddenFrom']
  size: ManBurgerProps['size']
}

const BaseBurger = (props: PropsWithChildren<BurgerProps>, ref: Ref<any>) => {
  const { ...rest } = props

  return <ManBurger ref={ref} {...rest}></ManBurger>
}

export const Burger = forwardRef(BaseBurger)
