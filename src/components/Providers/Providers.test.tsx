import React from 'react'
import { render } from '@/test-utils'

import { Providers } from './Providers'

describe('Providers', () => {
  it('renders without crashing', () => {
    render(<Providers />)
    expect(true).toBe(true)
  })
})