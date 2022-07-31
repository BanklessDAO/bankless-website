import React from 'react'
import { VStack } from '@chakra-ui/react'

import PodcastHatchery from './podcast-hatchery'
import Podcasts from './podcasts'
import ComingSoon from './coming-soon'
import PodcastIdea from './podcast-idea'

class Listen extends React.Component {
  render() {
    return (
      <VStack rowGap={{ base: '2rem', md: '2rem' }}>
        <PodcastHatchery />
        <Podcasts />
        <ComingSoon />
        <PodcastIdea />
      </VStack>
    )
  }
}

export default Listen
