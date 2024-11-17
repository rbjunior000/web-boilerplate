import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Box } from './Box'

export default {
  title: 'Components/Box',
  component: Box,
} as Meta<typeof Box>

const Template: StoryFn<typeof Box> = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = {}