import * as React from 'react'
import { Container, Ocean, Wave } from './styles'

const Waves: React.FC = () => {
  return (
    <Container>
      <Ocean>
        <Wave></Wave>
        <Wave></Wave>
      </Ocean>
    </Container>
  )
}

export default Waves
