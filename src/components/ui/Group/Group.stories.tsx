import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Group } from './Group'

export default {
  title: 'Components/Group',
  component: Group,
} as Meta<typeof Group>

const Template: StoryFn<typeof Group> = (args) => <Group {...args} />

export const Default = Template.bind({})
Default.args = {}