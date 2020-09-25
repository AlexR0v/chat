import { defineMessages } from 'react-intl'

import { name as scope }  from '../package.json'

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Войти в аккаунт',
  },

  description: {
    id: `${scope}.description`,
    defaultMessage: 'Пожалуйста, войдите в аккаунт',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Логин',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Пароль',
  },
  button: {
    id: `${scope}.button`,
    defaultMessage: 'Войти в аккаунт',
  },
  linkAuth: {
    id: `${scope}.linkAuth`,
    defaultMessage: 'Зарегистрироваться',
  },
  linkHome: {
    id: `${scope}.linkHome`,
    defaultMessage: 'На Главную',
  },
})
