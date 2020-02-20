import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  top: 0;
  background-color: skyblue;
  width: 100%;
`

// import link to /login here
// make navbar
const Header = () => {
  return (
    <Container>
      <h1>this is header</h1>
    </Container>
  )
}

export default Header
