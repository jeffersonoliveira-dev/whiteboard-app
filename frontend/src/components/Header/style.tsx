import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBar = styled.nav`
  height: 30px;
  width: 100%;
`

export const Container = styled.ul`
  display: flex;
  margin-top: 0;
  justify-content: space-between;
  background-color: #1976d2;
  padding: 10px;
`

export const Li = styled.li`
  display: block;
  flex: 1;
  list-style-type: none;
  min-width: 100px;
  height: 100%;
  color: white;
`
export const LoginButton = styled(Link)`
  float: right;
  text-decoration: none;
  color: white;
`

export const Logo = styled.div``
