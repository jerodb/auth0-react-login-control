import _Callback from './components/Callback'
import _LoginControl from './components/LoginControl'

// Callback and LoginControl works only on the client. 
// If this is used with a SSR app, both components return <></> when rendered in the server.
const isClient = typeof window !== 'undefined' && window.document

const Callback = isClient ? _Callback : () => <></>
const LoginControl = isClient ? _LoginControl : () => <></>

export {
  Callback,
  LoginControl
}
