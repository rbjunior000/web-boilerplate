import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Logo } from './Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta<typeof Logo>

const Template: StoryFn<typeof Logo> = (args) => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {}