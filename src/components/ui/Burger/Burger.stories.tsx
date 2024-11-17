import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Burger } from './Burger'

export default {
  title: 'Components/Burger',
  component: Burger,
} as Meta<typeof Burger>

const Template: StoryFn<typeof Burger> = (args) => <Burger {...args} />

export const Default = Template.bind({})
Default.args = {}