import * as React from 'react'
import { render } from 'react-dom'
import { authProvider } from './store/index'
import Login from './routes/Login'
import Home from './routes/Home'
import { HashRouter as Router, Route } from 'react-router-dom'
type AppProps = {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      authProvider: any
    }
  }
}
export const App: React.FunctionComponent<AppProps> = () => {
  return (
    <authProvider>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    </authProvider>
  )
}

render(<App />, document.getElementById('app'))
