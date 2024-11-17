import React from 'react'
import { render } from '@/test-utils'

import { Layout } from './Layout'

describe('Layout', () => {
  it('renders without crashing', () => {
    render(<Layout />)
    expect(true).toBe(true)
  })
})