import React from 'react'
import { Container, VStack, Flex } from '@chakra-ui/react'

import Hero from './hero'
import Newsletter from './newsletters'
import Satire from './satire'
import IntMediaNode from './international-media-node'

class Home extends React.Component {
  render() {
    return (
      <Container maxW={{ base: 'container.sm', md: 'container.xl' }}>
        <VStack flexDir='column' justify='center' alignItems='center' rowGap={16}>
          <Hero />
          <Newsletter />
          <Satire />
          <IntMediaNode />
        </VStack>
      </Container>
    )
  }
}

export default Home
