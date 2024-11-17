import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Layout } from './Layout'

export default {
  title: 'Components/Layout',
  component: Layout,
} as Meta<typeof Layout>

const Template: StoryFn<typeof Layout> = (args) => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {}