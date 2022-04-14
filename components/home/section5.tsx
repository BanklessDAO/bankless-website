import React from 'react'

import { Flex, Text, Button, InputGroup, InputRightElement, Input } from '@chakra-ui/react'
import ThreeRings from 'components/common/three-rings';
import SubscribeWidget  from 'components/common/subscribe-widget';

class Section5 extends React.Component {
  render() {
    return (
      <Flex flexDir='column' justifyContent='center' alignItems='center' rowGap={{ base: 8, md: 16 }}>
        <ThreeRings />

        {/* <Flex
          flexWrap='nowrap'
          flexDir={{ base: 'column', lg: 'row'}}
          justifyContent='center'
          alignItems='center'
          rowGap={4}
          marginTop={{ base: 8, lg: 32 }}>
          <Text
            fontSize={{base: '2xl', lg: '4xl' }}
            fontWeight={700}
            whiteSpace='nowrap'
            marginRight={{ base: 0, lg: 4}}>
            Start Your Journey
          </Text>
          <InputGroup>
            <Input
              // pr='4.5rem'
              width={{base: '350px', lg: '500px' }}
              height='65px'
              type='text'
              placeholder={`Your email address`}
            />
            <InputRightElement height='100%' width={{base: '100px', lg: '130px' }}>
              <Button
                height='100%'
                width='100%'
                onClick={() => null}>
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex> */}

        <SubscribeWidget />
      </Flex>
    )
  }
}

export default Section5;
