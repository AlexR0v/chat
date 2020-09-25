import * as React                 from 'react'
import { injectIntl }             from 'react-intl'

import { Button }                 from '@ui/button'
import { NameIcon, PasswordIcon } from '@ui/icons'
import { Input }                  from '@ui/input'
import { Box, Column, Layout }    from '@ui/layout'
import { Text }                   from '@ui/text'
import { theme }                  from '@ui/theme'

import messages                   from './messages'

const Form = ({ intl }) => (
  <Box width={340}>
    <Column>
      <Input
        backgroundImage={`url(${NameIcon})`}
        placeholder={intl.formatMessage(messages.login)}
      />
      <Layout flexBasis={20} />
      <Input
        type='password'
        backgroundImage={`url(${PasswordIcon})`}
        backgroundSize='8% 62%'
        backgroundPosition='5px center'
        placeholder={intl.formatMessage(messages.password)}
      />
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
