import React, { useEffect } from 'react'
import Auth0Manager from '../lib/Auth0Manager'

function Callback({ config, onSetSession = null }) {
  const AuthManager = new Auth0Manager(config)

  useEffect(() => {
    const handleAuthentication = async () => {
      if (/access_token|id_token|error/.test(document.location.hash)) {
        return AuthManager.handleAuthentication()
      }
      return null
    }

    handleAuthentication().then(session => {
      if (onSetSession) return onSetSession(session)

      document.location.href='/'
    })
  })

  return <></>
}

export default Callback
