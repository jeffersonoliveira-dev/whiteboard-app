import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../src/routes/Login'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
    </Router>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))
