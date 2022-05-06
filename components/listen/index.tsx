import React from 'react'
import { Container, VStack } from '@chakra-ui/react'

import PodcastHatchery from './podcast-hatchery';
import Podcasts from './podcasts';
import ComingSoon from './coming-soon';
import PodcastIdea from './podcast-idea';

class Listen extends React.Component {
  render() {
    return (
      <Container maxW='container.lg'>
        <VStack rowGap={{ base: 2, md: 4 }}>
          <PodcastHatchery />
          <Podcasts />
          <ComingSoon />
          <PodcastIdea />
        </VStack>
      </Container>
    )
  }
}

export default Listen
