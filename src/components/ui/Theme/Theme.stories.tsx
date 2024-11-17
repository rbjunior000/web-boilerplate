import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Theme } from './Theme'

export default {
  title: 'Components/Theme',
  component: Theme,
} as Meta<typeof Theme>

const Template: StoryFn<typeof Theme> = (args: any) => <Theme {...args} />

export const Default = Template.bind({})
Default.args = {}