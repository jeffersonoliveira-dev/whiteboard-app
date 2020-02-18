import * as React from 'react'
import { render } from 'react-dom'
import { AuthProvider } from './store/index'
import Login from './routes/Login'
import Home from './routes/Home'
import { HashRouter as Router, Route } from 'react-router-dom'
import GlobalStyles from './components/GlobalStyles'

/* declare global { */
/*   namespace JSX { */
/*     interface IntrinsicElements { */
/*       AuthProvider: any */
/*     } */
/*   } */
/* } */

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Router>
      <GlobalStyles />
    </AuthProvider>
  )
}

render(<App />, document.getElementById('app'))
