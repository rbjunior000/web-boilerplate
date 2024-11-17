import { Meta, StoryFn } from '@storybook/react'
import { ThemeProvider } from './ThemeProvider'

export default {
  title: 'Components/Theme',
  component: ThemeProvider
} as Meta<typeof ThemeProvider>

const Template: StoryFn<typeof ThemeProvider> = (args: any) => <ThemeProvider {...args} />

export const Default = Template.bind({})
Default.args = {}
