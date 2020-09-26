import React              from 'react'

import { Column, Layout } from '@ui/layout'
import { NextLink }       from '@ui/link'

export default () => (
  <>
    <Column alignItems='center'>
      <Layout flexBasis={50} />
      <NextLink href='/signin'>Авторизироваться</NextLink>
      <Layout flexBasis={50} />
      <NextLink href='/auth'>Зарегистрироваться</NextLink>
    </Column>
  </>
)
