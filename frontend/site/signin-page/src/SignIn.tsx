import Link      from 'next/link'
import React     from 'react'

import { Text }  from '@ui/text'
import { theme } from '@ui/theme'

const SignIn = () => (
  <>
    <Text fontFamily={theme.fontFamily.text} fontSize={40}>
      Hello
    </Text>
    <Link href='/auth'>Авторизироваться</Link>
  </>
)

export default SignIn
