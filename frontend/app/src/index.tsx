import React             from 'react'
import { ThemeProvider } from 'emotion-theming'

import { SignIn }        from '@site/signin'
import { theme }         from '@ui/theme'

export default () => (
  <>
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  </>
)
