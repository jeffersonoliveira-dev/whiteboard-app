import * as React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Login from './routes/Login'

type AppProps = {}

export const App: React.FunctionComponent<AppProps> = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Login} />
      </Router>
    </Provider>
  )
}

render(<App />, document.getElementById('app'))
