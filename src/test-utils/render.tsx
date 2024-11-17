import { render as testingLibraryRender } from '@testing-library/react'

export function render(ui: React.ReactNode) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider theme={theme({ colorMode: 'light' })}>{children}</ThemeProvider>
    ),
  })
}
