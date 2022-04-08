import React from 'react'

import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react'
import ThreeRings from './three-rings'

class NewsletterSection extends React.Component {
  render() {
    return (
      <Flex flexDir='column' justifyContent='center' alignItems='center'>
        <ThreeRings />
        <Flex
          className='start-your-journey'
          direction={{ base: 'column', md: 'row' }}
          width={'80%'}
          mt={'130px'}
          justifyContent='center'
          alignItems='center'
        >
          <Text
            fontSize='4xl'
            fontWeight={700}
            whiteSpace='nowrap'
            margin={{ base: '0px 0px 30px 0px', md: '0px 100px 0px 0px' }}
          >
            Start Your Journey
          </Text>
          <InputGroup>
            <Input
              height='65px'
              type='text'
              placeholder={`Your email address`}
            />
            <InputRightElement width={{ base: '30%', md: 170 }} height='100%'>
              <Button height='100%' width='100%' onClick={() => null}>
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
