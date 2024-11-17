import { ThemeProvider } from '@/components/ui'
import '@mantine/core/styles.css'

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!'
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
