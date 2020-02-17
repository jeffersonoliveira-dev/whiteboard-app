import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

const Welcome = styled.div`
  posiiton: absolute;
  left: 50%;
  top: 50%:
`

const Home = () => {
  return (
    <Container>
      <Welcome>DraWinning</Welcome>
    </Container>
  )
}

export default Home
