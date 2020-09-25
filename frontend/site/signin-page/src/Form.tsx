import * as React              from 'react'
import { Box, Column, Layout } from '@atlantis-lab/layout'
import { injectIntl }          from 'react-intl'

import { Button }              from '@ui/button'
import { Input }               from '@ui/input'
import { Text }                from '@ui/text'
import { theme }               from '@ui/theme'

import messages                from './messages'

const Form = ({ intl }) => (
  <Box width={340}>
    <Column>
      <Input placeholder={intl.formatMessage(messages.login)} />
      <Layout flexBasis={20} />
      <Input placeholder={intl.formatMessage(messages.password)} />
      <Layout flexBasis={54} />
      <Button>
        <Text
          color={theme.colors.white}
          fontSize={theme.fontSize.xs}
          fontFamily={theme.fontFamily.text}
        >
          {intl.formatMessage(messages.button)}
        </Text>
      </Button>
    </Column>
  </Box>
)

export default injectIntl(Form)
