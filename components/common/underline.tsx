import React from 'react'

import { Container } from '@chakra-ui/react'

class Underline extends React.Component {
  render() {
    return (
      <Container
        filter='blur(5px)'
        mt={4}
        mb={{ base: 4, md: 12 }}
        fontSize='16px'
        lineHeight='8px'
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
