import React from 'react'
import LoggedIn from './LoggedInView'
import LoggedOut from './LoggedOutView'
import Spinner from './SpinnerView'

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
  if (isLoggedIn) return <Spinner />

  return <LoggedOut login={login} />
}

export default LoginControlComponent
