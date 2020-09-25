import React, { useState }     from 'react'
import { injectIntl }          from 'react-intl'

import { GomerIcon }           from '@ui/icons'
import { Box, Column, Layout } from '@ui/layout'
import { NextLink }            from '@ui/link'
import { Text }                from '@ui/text'
import { theme }               from '@ui/theme'

import Form                    from './Form'
import messages                from './messages'
import { Button }              from '../../../ui/button/src'

const Auth = ({ intl }) => {
  const [isSuccess, setIsSuccess] = useState(false)

  return (
    <Column alignItems='center' justifyContent='center'>
      <Button onClick={() => setIsSuccess(!isSuccess)}>Click</Button>
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
      <Box boxShadow={theme.shadows.small} width={430} borderRadius={theme.borderRadius.s}>
        {!isSuccess ? (
          <Column alignItems='center'>
            <Layout flexBasis={54} />
            <Form />
            <Layout flexBasis={30} />
            <NextLink href='/signin'>{intl.formatMessage(messages.linkAuth)}</NextLink>
            <Layout flexBasis={20} />
            <NextLink href='/'>{intl.formatMessage(messages.linkHome)}</NextLink>
            <Layout flexBasis={30} />
          </Column>
        ) : (
          <Column alignItems='center' justifyContent='center' textIlign='center'>
            <Layout flexBasis={130} />
            <GomerIcon />
            <Layout flexBasis={130} />
            <Text as='h1' fontFamily={theme.fontFamily.text} fontSize={theme.fontSize.ml}>
              {intl.formatMessage(messages.successTitle)}
            </Text>
            <Layout flexBasis={28} />
            <Box width={340} style={{ textAlign: 'center' }}>
              <Text
                as='h2'
                fontFamily={theme.fontFamily.text}
                fontSize={theme.fontSize.s}
                color={theme.colors.greyDark}
              >
                {intl.formatMessage(messages.successDescr)}
              </Text>
            </Box>
            <Layout flexBasis={100} />
          </Column>
        )}
      </Box>
    </Column>
  )
}

export default injectIntl(Auth)
