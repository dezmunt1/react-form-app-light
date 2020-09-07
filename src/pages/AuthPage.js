import React, { useState } from 'react'
import {Redirect} from 'react-router-dom'
import { getLogined } from '../utils/functions'

export const AuthPage = (lol) => {

  const [ form, setForm ] = useState({
    username: '',
    password: '',
  })

  const [error, setError] = useState({
    message: ''
  })

  const [logined, setLogined] = useState(
    getLogined() ? getLogined().success : false
  )

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value});
  }


  const loginHandler = async (event) => {
    event.preventDefault()
    try {

      if (form.username && form.password) {
        const success = form.username === 'username' && form.password === 'password' ? true : false
        if (success) {
          localStorage.setItem('logined', JSON.stringify({success}))
          return setLogined(true)
        }
        setError({message: 'Неверный логин или пароль!'})
      } else {
        setError({message: 'Заполните обязательные поля!'})
      }
    } catch (error) {
      console.log(error)
    }
      
  }

  const content =
    <div className="login-page">
      <div className="form">
        <form className="login-form">
        <input
            type="text"
            name="username"
            placeholder="name"
            onChange={changeHandler}
            value={form.username}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={changeHandler}
            value={form.password}
            required
          />
          { error.message ? <p className="message">{error.message}</p> : error.message}
          <button onClick={loginHandler}>login</button>
        </form>
      </div>
    </div>


  return (
    <div className="authpage-container">
        {logined ? <Redirect to={'/logined'} /> : content }
    </div>
  )
}
