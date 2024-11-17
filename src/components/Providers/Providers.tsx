import { forwardRef } from 'react'
import type { Ref, PropsWithChildren } from 'react'
import { Theme } from '../ui'

type ProvidersProps = {
}

const BaseProviders = (props: PropsWithChildren<ProvidersProps>) => {
  const { children, ...rest } = props

  return (
    <Theme {...rest}>
        {children} 
    </Theme>
  )
}

export const Providers = forwardRef(BaseProviders)