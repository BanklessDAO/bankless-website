import React from 'react'

import { Container } from '@chakra-ui/react'

class Underline extends React.Component {
  render() {
    return (
      <Container
        filter='blur(2px)'
        mt={4}
        mb={{ base: 4, md: 12 }}
        fontSize='16px'
        lineHeight='6px'
        background='linear-gradient(
          91.88deg,
          #D02128 44.79%,
          rgba(140, 29, 207, 0) 101.77%
        )'
        w='100%'
      >
        &nbsp;
      </Container>
    )
  }
}

export default Underline
