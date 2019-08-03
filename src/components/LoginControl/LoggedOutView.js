import React from 'react'
import Button from '@material-ui/core/Button'

const LoggedOutView = ({ login }) => (
  <Button
    onClick={login}
    style={styles.loginBtn}
  >
    Log In
  </Button>
)

export default LoggedOutView

const styles = {
  loginBtn: {
    height: 38,
    padding: '0 30px',
    backgroundColor: '#CC3131',
    color: '#FFFFFF',
    fontWeight: 500,
  },
}