import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Providers } from './Providers'

export default {
  title: 'Components/Providers',
  component: Providers,
} as Meta<typeof Providers>

const Template: StoryFn<typeof Providers> = (args) => <Providers {...args} />

export const Default = Template.bind({})
Default.args = {}