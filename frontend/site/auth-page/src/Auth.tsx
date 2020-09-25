import Link      from 'next/link'
import React     from 'react'

import { Text }  from '@ui/text'
import { theme } from '@ui/theme'

const Auth = () => (
  <>
    <Text fontFamily={theme.fontFamily.text} fontSize={40}>
      Hello world
    </Text>
    <Link href='/'>На главную</Link>
  </>
)

export default Auth
