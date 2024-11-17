import { useHeadroom } from '@/hooks'
import type { PropsWithChildren, Ref } from 'react'
import { forwardRef } from 'react'
import { Logo } from '../Logo'
import { AppShell, Burger, Group, rem } from '../ui'

type LayoutProps = {
  height?: number
}

const BaseLayout = (props: PropsWithChildren<LayoutProps>, ref: Ref<any>) => {
  const { children, height = 60, ...rest } = props
  const pinned = useHeadroom({ fixedAt: 120 })

  return (
    <AppShell header={{ height: height, collapsed: !pinned, offset: false }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened onClick={() => {}} hiddenFrom="sm" size="sm" />
          <Logo size="50" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <div>{index}</div>
          ))}
      </AppShell.Navbar>

      <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>{children}</AppShell.Main>
    </AppShell>
  )
}

export const Layout = forwardRef(BaseLayout)
