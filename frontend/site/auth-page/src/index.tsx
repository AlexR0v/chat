import React            from 'react'
import { IntlProvider } from 'react-intl'

import Auth             from './Auth'

export default () => (
  <>
    <IntlProvider locale='ru' defaultLocale='ru'>
      <Auth />
    </IntlProvider>
  </>
)
