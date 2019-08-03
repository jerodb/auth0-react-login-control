import React, { useEffect, useState } from 'react'
import Auth0Manager from '../../lib/Auth0Manager'
import LoginControlComponent from './LoginControlComponent'

function LoginControlContainer({ 
  config, menuList = [], onLogOut = null, onSetSession = null 
}) {
  const AuthManager = new Auth0Manager(config)

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  const [expiresAt, setExpiresAt] = useState('')
  const [picture, setPicture] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    if (expiresAt && !AuthManager.isAuthenticated(expiresAt)) {
      logout()
    }

    if (isLoggedIn) {
      const renewSession = async () => AuthManager.renewSession()

      renewSession().then(session => {
        if (session) {
          setExpiresAt(session.expiresAt)
          setPicture(session.picture)
          setUserName(session.userName)
        }

        if (onSetSession) onSetSession(session)
      })
    }
  }, [])

  const login = () => AuthManager.login()

  const logout = () => {
    if (onLogOut) onLogOut()
    AuthManager.logout()
  }

  return (
    <LoginControlComponent
      isLoggedIn={isLoggedIn}
      login={login}
      logout={logout}
      menuList={menuList}
      picture={picture}
      userName={userName}
    />
  )
}

export default LoginControlContainer
