import { forwardRef } from 'react'
import "@mantine/core/styles.css";
import type { PropsWithChildren } from 'react'
import {  ColorSchemeScript, MantineProvider } from '@mantine/core'
import { theme } from './theme'

type ThemeProps = {
}

const BaseTheme = (props: PropsWithChildren<ThemeProps>) => {
  const { children, ...rest } = props

  return (
    <MantineProvider theme={theme}  {...rest}>
      <ColorSchemeScript />
      {children}
    </MantineProvider>
  )
}

export const Theme = forwardRef(BaseTheme)