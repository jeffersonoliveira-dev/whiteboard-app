import * as React from 'react'
import { render } from 'react-dom'

type AppProps = {

}

export const App: React.FunctionComponent<AppProps> = () => {
  return <h1> ola </h1>
}

render(< App /> , document.getElementById('app'))
