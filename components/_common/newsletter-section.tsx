import React from 'react'

import { Flex } from '@chakra-ui/react'
import SubscribeWidget from './subscribe-widget'

class NewsletterSection extends React.Component {
  render() {
    return (
      <Flex
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        rowGap={{ base: 8, md: 16 }}
        mt={16}>
        {/* <ThreeRings /> */}
        <SubscribeWidget />
      </Flex>
    )
  }
}

export default NewsletterSection
