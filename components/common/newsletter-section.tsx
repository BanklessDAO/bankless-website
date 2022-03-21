import React from 'react'

import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
} from '@chakra-ui/react'
import ThreeRings from './three-rings'


class NewsletterSection extends React.Component {
  render() {
    return (
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center">
        <ThreeRings />
        <Flex
          className='start-your-journey'
          width={"80%"}
          mt={"130px"}
          flexWrap='nowrap'
          flexDir='row'
          justifyContent='center'
          alignItems='center'>
          <Text fontSize='4xl' fontWeight={700} whiteSpace='nowrap' marginRight={100}>
            Start Your Journey
          </Text>
          <InputGroup>
            <Input
              height='65px'
              type='text'
              placeholder={`Your email address`}
            />
            <InputRightElement width={170} height='100%'>
              <Button
                height='100%'
                width='100%'
                onClick={() => null}>
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    )
  }
}

export default NewsletterSection
