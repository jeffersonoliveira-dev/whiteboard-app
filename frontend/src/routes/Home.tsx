import * as React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
// import Waves from '../components/Waves/Waves'

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: skyblue;
`

const Welcome = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: block;
`
const Home = () => {
  return (
    <Container>
      <Header />
      <Welcome>DraWinning</Welcome>
    </Container>
  )
}

export default Home
