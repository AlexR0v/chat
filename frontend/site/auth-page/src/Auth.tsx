import React        from 'react'

import { NextLink } from '@ui/link'
import { Text }     from '@ui/text'
import { theme }    from '@ui/theme'

const Auth = () => (
  <>
    <Text fontFamily={theme.fontFamily.text} fontSize={40}>
      Hello world
    </Text>
    <NextLink href='/'>На главную</NextLink>
  </>
)

export default Auth
