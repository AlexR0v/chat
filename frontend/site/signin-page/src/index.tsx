import React            from 'react'
import { IntlProvider } from 'react-intl'

import SignIn           from './SignIn'

export default () => (
  <>
    <IntlProvider locale='ru' defaultLocale='ru'>
      <SignIn />
    </IntlProvider>
  </>
)
