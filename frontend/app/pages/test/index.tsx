/* eslint-disable */
import * as React              from 'react'
import { useEffect, useState } from 'react'

const useStateCallback = (initialValue, callBack) => {
  const [state, setState] = useState(initialValue)
  useEffect(() => callBack(state), [state])
  return [state, setState]
}

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [password, setPassword] = useState('')
  const [isPassword, setIsPassword] = useState(false)
  const [successPass, setSuccessPass] = useState('')

  const [isValidEmail, setIsValidEmail] = useStateCallback(false, () => {
    if (isValidEmail) {
      setSuccess(`E-mail ok!`)
    }
  })
  const [isValidPass, setIsValidPass] = useStateCallback(false, () => {
    if (isValidPass) {
      setSuccess(`Подходящий пароль!`)
    }
  })
  const [isValidName, setIsValidName] = useStateCallback(false, () => {
    if (isValidName) {
      setSuccess(`Имя ок!`)
    }
  })

  const handleForm = event => {
    event.preventDefault()
    setName('')
    setPassword('')
    setRePassword('')
    setEmail('')

    if (name && password && email && isValidName && isValidPass && isValidEmail && isPassword) {
      setSuccess(`Все ок!`)
      alert(`Имя: ${name}, пароль: ${password}, email: ${email}`)
    } else {
      setSuccess(`Нужно заполнить все поля формы!`)
    }
  }

  const handleFormChange = event => {
    if (event.target.name === 'password') {
      setPassword(event.target.value)

      setIsValidPass(
        /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(
          event.target.value
        )
      )

      if (!/[0-9a-zA-Z!@#$%^&*]{6,}/.test(event.target.value)) {
        setSuccess('Пароль слишком короткий!')
      }
      if (!/(?=.*[a-z])/.test(event.target.value) && !/(?=.*[A-Z])/.test(event.target.value)) {
        setSuccess(`Пароль должен содержать латнские буквы в нижнем регистре!`)
      }
      if (!/(?=.*[A-Z])/.test(event.target.value)) {
        setSuccess(`Пароль должен содержать латнские буквы в верхнем регистре!`)
      }

      if (!/(?=.*[!@#$%^&*])/.test(event.target.value)) {
        setSuccess(`Пароль должен содержать спецсимволы ! @ # $ % ^ & *`)
      }

      if (!/(?=.*[0-9])/.test(event.target.value)) {
        setSuccess(`Пароль должен иметь число!`)
      }
    }

    if (event.target.name === 'rePassword') {
      setRePassword(event.target.value)
    }
    if (event.target.name === 'email') {
      setIsValidEmail(
        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
          event.target.value
        )
      )
      if (
        !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
          event.target.value
        )
      ) {
        setSuccess(`E-mail не валидный!`)
      }
      setEmail(event.target.value)
    }
    if (event.target.name === 'name') {
      setIsValidName(/(^[A-Z]{1}[a-z]{1,14})|(^[А-Я]{1}[а-я]{1,14})/.test(event.target.value))
      if (!/(^[A-Z]{1}[a-z]{1,14})|(^[А-Я]{1}[а-я]{1,14})/.test(event.target.value)) {
        setSuccess(`Имя не подходит!`)
      }
      setName(event.target.value)
    }
  }

  useEffect(() => {
    if (password === rePassword) {
      setIsPassword(true)
      setSuccessPass('')
    } else {
      setSuccessPass('Пароли не совпадают!')
      setIsPassword(false)
    }
  }, [password, rePassword, isValidPass, name, email, isValidEmail])

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleForm(event)
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSuccess('')
      setSuccessPass('')
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [success, setSuccess, setSuccessPass])

  return (
    <>
      <form
        style={{ display: 'flex', flexDirection: 'column', width: '400px' }}
        onKeyPress={handleKeyPress}
      >
        <p>
          {success}
          {successPass}
        </p>
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleFormChange}
          placeholder={'E-mail'}
        />
        <input
          type='text'
          value={name}
          name='name'
          onChange={handleFormChange}
          placeholder={'Name'}
        />
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleFormChange}
          placeholder={'password'}
        />
        <input
          type='password'
          name='rePassword'
          value={rePassword}
          onChange={handleFormChange}
          placeholder={'repeat password'}
        />

        <button onClick={handleForm}>Отправить</button>
      </form>
    </>
  )
}

export default Form
