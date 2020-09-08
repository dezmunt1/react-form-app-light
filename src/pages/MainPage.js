import React, { useState, useCallback} from 'react'
import {AuthPage} from './AuthPage'

export const MainPage = () => {
  const [logined, setLogined] = useState(false)

  const logoutHandler = () => {
    setLogined(false)
  }

  const logingHandler = useCallback(() => {
    setLogined(true)
  }, [setLogined])

  const content = (
    <div className="login-page">
      <div className="form">
        <button onClick={logoutHandler}>Выйти</button>
      </div>
    </div>
  )

  return (
    logined ? content : <AuthPage onLogin={logingHandler} />
  )
}