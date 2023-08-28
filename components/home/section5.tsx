import React from 'react'

import {
  Flex,
  Text,
  Button,
  Input,
} from '@chakra-ui/react'

class Section5 extends React.Component {
  render() {
    return (
      <Flex
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        rowGap={{ base: 8, md: 16 }}>
        <Flex
          flexWrap='nowrap'
          flexDir={{ base: 'column', lg: 'row' }}
          justifyContent='space-between'
          alignItems='center'
          width={{ lg: '70vw', xl: '60vw' }}
          marginTop='8'>
          <Text
            fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
            mb={{ base: '2rem', lg: '0' }}
            fontWeight={700}
            whiteSpace='nowrap'
            marginRight={{ base: 0, lg: 4 }}>
            Start Your Journey
          </Text>

          <Flex>
            <Input
              height={{ base: '3rem', lg: '4rem' }}
              width={{ base: '200px', md: '300px', xl: '350px' }}
              textAlign='center'
              type='text'
              placeholder={`Your email address`}
              borderRadius='0'
            />
            <Button
              height={{ base: '3rem', lg: '4rem' }}
              width={{ base: '6rem', md: '7rem' }}
              onClick={() => null}
              borderRadius='0'>
              Subscribe
            </Button>
          </Flex>
        </Flex>
      </Flex>
    )
  }
}

export default Section5
