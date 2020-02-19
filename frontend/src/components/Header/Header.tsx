import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  top: 0;
  background-color: skyblue;
  width: 100%;
`

const Header = () => {
  return (
    <Container>
      <h1>this is header</h1>
    </Container>
  )
}

export default Header
