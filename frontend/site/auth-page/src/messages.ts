import { defineMessages } from 'react-intl'

import { name as scope }  from '../package.json'

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Регистрация',
  },

  description: {
    id: `${scope}.description`,
    defaultMessage: 'Для входа в чат, вам нужно зарегистрироваться',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'E-mail',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Ваше имя',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Пароль',
  },
  passwordRepeat: {
    id: `${scope}.passwordRepeat`,
    defaultMessage: 'Повторите пароль',
  },
  button: {
    id: `${scope}.button`,
    defaultMessage: 'Зарегистрироваться',
  },
  linkAuth: {
    id: `${scope}.linkAuth`,
    defaultMessage: 'Войти в аккаунт',
  },
  linkHome: {
    id: `${scope}.linkHome`,
    defaultMessage: 'На Главную',
  },
  successTitle: {
    id: `${scope}.successTitle`,
    defaultMessage: 'Подтвердите свою почту',
  },
  successDescr: {
    id: `${scope}.successDescr`,
    defaultMessage: 'На вашу почту отправлено письмо с сылкой на подтверждение аккаунта',
  },
})
