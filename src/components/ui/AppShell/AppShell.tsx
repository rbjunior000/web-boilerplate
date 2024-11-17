import { AppShell as ManAppShell, AppShellProps as ManAppShellProps } from '@mantine/core'
import type { PropsWithChildren, Ref } from 'react'

type AppShellProps = {} & ManAppShellProps

export const AppShell = (props: PropsWithChildren<AppShellProps>, ref: Ref<any>) => {
  const { children, ...rest } = props

  return (
    <ManAppShell ref={ref} {...rest}>
      {children}
    </ManAppShell>
  )
}

AppShell.Header = ManAppShell.Header
AppShell.Main = ManAppShell.Main
AppShell.Navbar = ManAppShell.Navbar
