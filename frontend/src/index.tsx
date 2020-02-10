import * as React from 'react'
import { render } from 'react-dom'
import { authProvider } from './store/index'
import Login from './routes/Login'
import { HashRouter as Router, Route } from 'react-router-dom'

type AppProps = {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      authProvider: any
    }
  }
}

// form on login

export const App: React.FunctionComponent<AppProps> = () => {
  return (
    <authProvider>
      <Router>
        <Route exact path="/" component={Login} />
      </Router>
    </authProvider>
  )
}

render(<App />, document.getElementById('app'))
