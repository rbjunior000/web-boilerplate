import { addons } from '@storybook/preview-api'
import React, { useEffect } from 'react'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'
import { Providers } from '../src/components'
import { Box } from '../src/components/ui'

const channel = addons.getChannel()

function ColorSchemeWrapper() {

  // useEffect(() => {
  //   channel.on(DARK_MODE_EVENT_NAME, theme.handleChangeColor)
  //   return () => channel.off(DARK_MODE_EVENT_NAME, theme.handleChangeColor)
  // }, [channel])

  return <></>
}

export const decorators = [
  (renderStory: any) => {
    return (
      <Providers>
        <ColorSchemeWrapper />
        <Box
          display="flex"
          h="100vh"
        >
          {renderStory()}
        </Box>
      </Providers>
    )
  },
]
