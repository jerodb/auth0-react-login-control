import React, { useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Auth0Manager from '../lib/Auth0Manager'

function Callback({ config, onSetSession = null, template = true }) {
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

  if( template === false ) return <></>

  return (
    <div style={styles.spinnerContainer}>
      <CircularProgress style={styles.spinner} />
    </div>
  )
}

export default Callback

const styles = {
  spinner: {
    color: '#4498c8',
    width: 80,
    height: 80,
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30%',
    paddingBottom: 30,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 30,
    width: '100%',
  }
}