import React, { useEffect } from 'react'
import Auth0Manager from '../lib/Auth0Manager'

function Callback({ location, onSetSession }) {
  const AuthManager = new Auth0Manager()

  useEffect(() => {
    const handleAuthentication = async () => {
      if (/access_token|id_token|error/.test(location.hash)) {
        return AuthManager.handleAuthentication()
      }
      return null
    }

    handleAuthentication().then(session => {
      if (onSetSession) onSetSession(session)
    })
  })

  return <></>
}

export default Callback
