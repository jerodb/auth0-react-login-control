# Auth0 React Login Control

## Installation
```
$ yarn add auth0-react-login-control
```
  
### Make sure to add peer dependencies to your app.
Why react, react-dom, @material-ui/core and @material-ui/icons are included as peer dependencies?  
This is to prevent conflicts with apps using this dependencies.
  
&nbsp;
## How to use it
- First you need to create an [Auth0 account](https://auth0.com/). There you will get the required credentials.

- Import **LoginControl** component and place it where you want the login widget to be shown. You need to pass a **config** prop to **LoginControl** with an object containing the required Auth0 credentials and params. **LoginControl** component will automatically take care of starting, renewing and verifying the user's session.
  
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
  
- Finally you need to import the **Callback** component and render it when the user is redirected after login.
  
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