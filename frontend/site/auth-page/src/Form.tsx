import * as React                            from 'react'
import { useEffect, useState }               from 'react'
import { injectIntl }                        from 'react-intl'

import { Button }                            from '@ui/button'
import { EmailIcon, NameIcon, PasswordIcon } from '@ui/icons'
import { Input }                             from '@ui/input'
import { Box, Column, Layout }               from '@ui/layout'
import { Text }                              from '@ui/text'
import { theme }                             from '@ui/theme'

import messages                              from './messages'

const useStateCallbackWrapper = (initialValue, callBack) => {
  const [state, setState] = useState(initialValue)
  useEffect(() => callBack(state), [state])
  return [state, setState]
}

const Form = ({ intl }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const [isEmailOk, setIsEmailOk] = useState(false)
  const [password, setPassword] = useStateCallbackWrapper('', () => {
    if (password === rePassword && password.length >= 1) {
      setIsSubmit(true)
      setSuccess(`${intl.formatMessage(messages.validPassword)}`)
    }
    if (password !== rePassword) {
      setSuccess(`${intl.formatMessage(messages.declinedPassword)}`)
    }
  })

  const handleForm = () => {
    setName('')
    setPassword('')
    setRePassword('')
    setEmail('')

    if (name && password && email) {
      setSuccess(`${intl.formatMessage(messages.success)}`)
      setIsSubmit(true)
      alert(`Имя: ${name}, пароль: ${password}, email: ${email}`) // eslint-disable-line
    } else {
      setSuccess(`${intl.formatMessage(messages.declined)}`)
    }
  }

  const [isValid, setIsValid] = useStateCallbackWrapper('', () => {
    if (!isValid && email.length >= 1) {
      setSuccess(`${intl.formatMessage(messages.unValidEmail)}`)
    }
    if (isValid) {
      setIsSubmit(true)
      setIsEmailOk(true)
      setSuccess(`${intl.formatMessage(messages.validEmail)}`)
    }
  })

  const handleForm1 = event => {
    if (event.target.name === 'password') {
      setPassword(event.target.value)
    }
    if (event.target.name === 'rePassword') {
      setRePassword(event.target.value)
    }
    if (event.target.name === 'email') {
      setIsValid(
        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
          event.target.value
        )
      )
      setEmail(event.target.value)
    }
    if (event.target.name === 'name') {
      setName(event.target.value)
    }
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleForm()
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSuccess('')
      setIsSubmit(false)
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [success, setSuccess])

  return (
    <Box width={340}>
      <Column onSubmit={handleKeyPress}>
        <Text
          fontSize={theme.fontSize.xs}
          color={isSubmit ? theme.colors.lightBlue : theme.colors.error}
          fontFamily={theme.fontFamily.text}
        >
          {success}
        </Text>
        <Input
          type='email'
          name='email'
          value={email}
          setIsEmailOk={isEmailOk}
          onChange={handleForm1}
          backgroundImage={`url(${EmailIcon})`}
          backgroundSize='8% 62%'
          backgroundPosition='5px center'
          placeholder={intl.formatMessage(messages.email)}
        />
        <Layout flexBasis={20} />
        <Input
          type='text'
          value={name}
          name='name'
          onChange={handleForm1}
          backgroundImage={`url(${NameIcon})`}
          placeholder={intl.formatMessage(messages.name)}
        />
        <Layout flexBasis={20} />
        <Input
          type='password'
          name='password'
          value={password}
          onChange={handleForm1}
          backgroundImage={`url(${PasswordIcon})`}
          backgroundSize='8% 62%'
          backgroundPosition='5px center'
          placeholder={intl.formatMessage(messages.password)}
        />
        <Layout flexBasis={20} />
        <Input
          type='password'
          name='rePassword'
          value={rePassword}
          onChange={handleForm1}
          backgroundImage={`url(${PasswordIcon})`}
          backgroundSize='8% 62%'
          backgroundPosition='5px center'
          placeholder={intl.formatMessage(messages.passwordRepeat)}
        />
        <Layout flexBasis={54} />
        <Button onClick={handleForm}>
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
}

export default injectIntl(Form)
