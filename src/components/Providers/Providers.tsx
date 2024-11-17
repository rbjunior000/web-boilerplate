import type { PropsWithChildren } from 'react'
import { forwardRef } from 'react'
import { ThemeProvider } from '../ui'

type ProvidersProps = {}

const BaseProviders = (props: PropsWithChildren<ProvidersProps>) => {
  const { children, ...rest } = props

  return <ThemeProvider {...rest}>{children}</ThemeProvider>
}

export const Providers = forwardRef(BaseProviders)
