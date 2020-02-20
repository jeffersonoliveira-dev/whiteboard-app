import * as React from 'react'
import { Link } from 'react-router-dom'
import { Container, Li, LoginButton, NavBar, Logo } from './style'

const Header = () => {
  return (
    <header>
      <NavBar>
        <Container>
          <Li>
            <Logo>DW</Logo>
          </Li>
          <Li>
            <LoginButton to="/login">Login</LoginButton>
          </Li>
        </Container>
      </NavBar>
    </header>
  )
}

export default Header
