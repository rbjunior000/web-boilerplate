import { forwardRef } from 'react'
import type { Ref, PropsWithChildren } from 'react'
import { AppShell, Burger, rem } from '@mantine/core'
import { useHeadroom } from '@mantine/hooks'

type LayoutProps = {
}

const BaseLayout = (props: PropsWithChildren<LayoutProps>, ref: Ref<any>) => {
  const { children, ...rest } = props
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: false }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened
          onClick={() => {}}
          hiddenFrom="sm"
          size="sm"
        />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Main
        pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}
      >
        {children}
      </AppShell.Main>
    </AppShell>
  )
}

export const Layout = forwardRef(BaseLayout)