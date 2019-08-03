# Auth0 React Login Control
  
## Installation
```
$ yarn add auth0-react-login-control
```
  
### Make sure to add peer dependencies to your app.
Why react, react-dom, @material-ui/core and @material-ui/icons are included as peer dependencies?  
This is to prevent conflicts with apps using this dependencies.
  
&nbsp;
## Auth0 credentials
- You need to create an account with [Auth0](https://auth0.com/). Then from your Auth0 Dashboard you can get from the *Application Settings* section the aplication details you will need.
  
&nbsp;
## How to use it
- Import **LoginControl** component and place it where you want the login widget to be shown. You need to pass a **config** prop to **LoginControl** with an object containing the required Auth0 details. **LoginControl** component automatically takes care of starting, renewing and verifying the user's session.
  
```
import React from 'react'
import { LoginControl } from 'auth0-react-login-control'

const auth0Config = {
  domain: YOUR_AUTH0_DOMAIN,
  clientID: YOUR_AUTH0_CLIENT_ID,
  redirectUri: URI_TO_BE_REDIRECTED_AFTER_LOGIN,
  responseType: AUTH0_RESPONSE_TYPE,
  scope: AUTH0_SCOPE
}

function YourComponent() {
  return (
    ...
    <LoginControl
      config={auth0Config}
    />
    ...
  )
}

export default
```
  
If the user has a session started **LoginControl** component shows the user's picture obtained from Auth0 or a default pic if no picture exists. When this picture is touched a menu with a *Logout* button expands.  
If no session has been started a *Login* button is shown. When this button is touched the user is redirected to the Auth0's Login Panel.
  
- When the user is redirected back to your app after login, the **Callback** component has to be rendered. **Callback** component automatically catches the uri's hash returned by Auth0 and handles the user authentication. A new session is started and the user is redirected to the root location '/', in general this will be the home screen.
  
```
import React from 'react'
import { Callback } from 'auth0-react-login-control'

const auth0Config = {
  ...
}

function YourCallbackComponent() {
  return (
    <Callback
      config={auth0Config}
    />
  )
}

export default CallbackComponent
```
  
This is the minimum configuration needed to set this up.
  
&nbsp;
## Configuration
  
### Add extra options to the *user menu list*
Just add the **menuList** prop to **LoginControl** as shown below.
  
```
import React from 'react'
import { LoginControl } from 'auth0-react-login-control'

const auth0Config = {
  ...
}

function YourComponent({ navigateToProfile }) {
  const menuList = [
    {
      name: 'Profile',
      onClick: () => navigateToProfile()
    },
  ]

  return (
    ...
    <LoginControl
      config={auth0Config}
      menuList={menuList}
    />
    ...
  )
}

export default
```
  
&nbsp;
### Prevent automatic redirect to root location '/' after login
  
&nbsp;
### Run code after a session is set
  
&nbsp;
### Run code after a session is finished
    
&nbsp;
## To Do

- Finish configuration doc
- Remove MUI
- Add testing
- Allow to easily customize some styles.