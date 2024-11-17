import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { AppShell } from './AppShell'

export default {
  title: 'Components/AppShell',
  component: AppShell,
} as Meta<typeof AppShell>

const Template: StoryFn<typeof AppShell> = (args) => <AppShell {...args} />

export const Default = Template.bind({})
Default.args = {}