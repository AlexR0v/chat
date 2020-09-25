import React                   from 'react'
import { Box, Column, Layout } from '@atlantis-lab/layout'
import { injectIntl }          from 'react-intl'

import { NextLink }            from '@ui/link'
import { Text }                from '@ui/text'
import { theme }               from '@ui/theme'

import Form                    from './Form'
import messages                from './messages'

const SignIn = ({ intl }) => (
  <Column alignItems='center' justifyContent='center'>
    <Layout flexBasis={300} />
    <Text as='h1' fontFamily={theme.fontFamily.text} fontSize={theme.fontSize.ml}>
      {intl.formatMessage(messages.title)}
    </Text>
    <Layout flexBasis={10} />
    <Text
      as='h2'
      fontFamily={theme.fontFamily.text}
      fontSize={theme.fontSize.s}
      color={theme.colors.greyDark}
    >
      {intl.formatMessage(messages.description)}
    </Text>
    <Layout flexBasis={30} />
    <Box width={430} height={375} border={theme.border.s} borderRadius={theme.borderRadius.s}>
      <Column alignItems='center'>
        <Layout flexBasis={54} />
        <Form />
        <Layout flexBasis={30} />
        <NextLink href='/auth'>{intl.formatMessage(messages.linkAuth)}</NextLink>
        <Layout flexBasis={20} />
        <NextLink href='/'>{intl.formatMessage(messages.linkHome)}</NextLink>
      </Column>
    </Box>
  </Column>
)

export default injectIntl(SignIn)
