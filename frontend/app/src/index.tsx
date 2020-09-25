import React              from 'react'
import { ThemeProvider }  from 'emotion-theming'
import { IntlProvider }   from 'react-intl'

import { Column, Layout } from '@ui/layout'
import { NextLink }       from '@ui/link'
import { theme }          from '@ui/theme'

export default () => (
  <>
    <IntlProvider locale='ru' defaultLocale='ru'>
      <ThemeProvider theme={theme}>
        <Column alignItems='center'>
          <Layout flexBasis={50} />
          <NextLink href='/signin'>Авторизироваться</NextLink>
          <Layout flexBasis={50} />
          <NextLink href='/auth'>Зарегистрироваться</NextLink>
        </Column>
      </ThemeProvider>
    </IntlProvider>
  </>
)
