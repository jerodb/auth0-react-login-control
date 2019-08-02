import React from 'react'
import Button from '@material-ui/core/Button'
import styles from './styles'

const LoggedOutView = ({ login }) => (
  <>
    <Button
      style={styles.login}
      onClick={login}
    >
    Log In
    </Button>
  </>
)

export default LoggedOutView
