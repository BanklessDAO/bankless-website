import React from 'react'

import {
  Flex,
} from '@chakra-ui/react'
import ThreeRings from './three-rings'
import SubscribeWidget from './subscribe-widget'

class NewsletterSection extends React.Component {
  render() {
    return (
      <Flex flexDir='column' justifyContent='center' alignItems='center' rowGap={{ base: 8, md: 16 }}>
        <ThreeRings />
        <SubscribeWidget />

      </Flex>
    )
  }
}

export default NewsletterSection
