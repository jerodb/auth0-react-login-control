# Auth0 React Login Control
  
React components that easily integrates Auth0 authentication into your React app.  
  
&nbsp;
## Installation
```
$ yarn add auth0-react-login-control
```
  
### Make sure to add peer dependencies to your app.
Why react, react-dom, @material-ui/core and @material-ui/icons are included as peer dependencies?  
This is to prevent conflicts with apps using this dependencies.
  
&nbsp;
## Auth0 credentials
- You need to create an account at **[Auth0](https://auth0.com/)**. Then in your Auth0 Dashboard from the *Application Settings* section you can get the aplication details you will need.
  
&nbsp;
## How to use it
1. Import **LoginControl** component and place it where you want the login widget to be shown. You need to pass a **config** prop to **LoginControl** with an object containing the required Auth0 details.  
**LoginControl** component automatically takes care of starting, renewing and verifying the user's session.
  
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
  
2. When the user is redirected back to your app after login, you need to render the **Callback** component.  
**Callback** component automatically catches the uri's hash returned by Auth0 and handles the user authentication. A new session is started and the user is redirected to the root location '/' of your app or web, in general this will be the home screen.
  
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
## Configurations
  
### Add extra options to the *user menu list*
Include the **menuList** prop to **LoginControl** as shown below.
  
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
### Run code after a session is set
### Also prevent automatic redirect to root location '/' after login
Include the **onSetSession** prop to **Callback** as shown below. This prevents the automatic redirect so you should probably redirect the user manually from the callback screen to somewhere else in your app.
  
```
import React from 'react'
import { Callback } from 'auth0-react-login-control'

const auth0Config = {
  ...
}

function YourCallbackComponent() {
  const onSetSession = session => {
    // session is the user/session info returned by Auth0 after successfully starting a session.
    // Here you can do what ever you need with the user/session info returned.
  }

  return (
    <Callback
      config={auth0Config}
      onSetSession={onSetSession}
    />
  )
}

export default CallbackComponent
```
  
&nbsp;
### Run code after a session is renewed
Include the **onSetSession** prop to **LoginControl** as shown below.
  
```
import React from 'react'
import { LoginControl } from 'auth0-react-login-control'

const auth0Config = {
  ...
}

function YourComponent({ navigateToProfile }) {
  const onSetSession = session => {
    // session is the user/session info returned by Auth0 after renewing a session.
    // Here you do what ever you need with the user/session info returned.
  }

  return (
    ...
    <LoginControl
      config={auth0Config}
      onSetSession={onSetSession}
    />
    ...
  )
}

export default
```
  
&nbsp;
### Run code after a session is finished
Include the **onLogOut** prop to **LoginControl** as shown below.
  
```
import React from 'react'
import { LoginControl } from 'auth0-react-login-control'

const auth0Config = {
  ...
}

function YourComponent({ navigateToProfile }) {
  const onLogOut = () => {
    // Place here the code to run right after a session is finished.
  }

  return (
    ...
    <LoginControl
      config={auth0Config}
      onLogOut={onLogOut}
    />
    ...
  )
}

export default
```
  
&nbsp;
### Prevent using default **Callback** template when redirected back from Auth0
**Callback** component shows a default template (a centered spinner on the screen) when rendered. You can prevent this template to show and use a custome view for your callback screen just by adding **template=false** prop to **Callback** component.
  
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
      template={false}
    />
  )
}

export default CallbackComponent
```
    
&nbsp;
## To Do

- Allow to easily customize some styles.
- Remove MUI
- Add testing