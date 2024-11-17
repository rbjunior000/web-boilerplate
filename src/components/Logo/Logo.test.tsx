import React from 'react'
import { render } from '@/test-utils'

import { Logo } from './Logo'

describe('Logo', () => {
  it('renders without crashing', () => {
    render(<Logo />)
    expect(true).toBe(true)
  })
})