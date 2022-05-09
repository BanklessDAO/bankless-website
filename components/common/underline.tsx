import React from 'react'

import { Container } from '@chakra-ui/react'

class Underline extends React.Component {
  render() {
    return (
      <Container
        filter='blur(3px)'
        width='30rem'
        mt={2}
        mb={{ base: 4, md: 6 }}
        fontSize='16px'
        lineHeight='5px'
        background='linear-gradient(
          91.88deg,
          #ff1013 44.79%,
          rgba(140, 29, 207, 0) 101.77%
        )'
      >
        &nbsp;
      </Container>
    )
  }
}

export default Underline
