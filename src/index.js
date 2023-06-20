import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GithubProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'

// domain:  dev-b61s4sqj8ra0mqnp.us.auth0.com
// clientID:  qnvI8oAwzMJjgNXlFmMlXFxAjtN3gdVt

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-b61s4sqj8ra0mqnp.us.auth0.com"
      clientId="qnvI8oAwzMJjgNXlFmMlXFxAjtN3gdVt"
      redirectUri={window.location.origin}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
