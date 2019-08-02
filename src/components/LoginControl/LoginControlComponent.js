import React from 'react'
import Activity from './Activity'
import LoggedIn from './LoggedInView'
import LoggedOut from './LoggedOutView'
import styles from './styles'

const LoginControlComponent = ({
  isLoggedIn, login, logout, menuList, picture, userName
}) => {
  if (picture && userName) {
    return (
      <LoggedIn
        logout={logout}
        menuList={menuList}
        picture={picture}
        userName={userName}
      />
    )
  }
  if (isLoggedIn) {
    return (<div style={styles.activity}><Activity /></div>)
  }

  return <LoggedOut login={login} />
}

export default LoginControlComponent
