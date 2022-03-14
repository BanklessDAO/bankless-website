import React from 'react'

import { Flex, Text, Box, Button, InputGroup, InputRightElement, Input } from '@chakra-ui/react'

class Section5 extends React.Component {
  render() {
    return (
      <Flex flexDir='column' justifyContent='center' alignItems='center'>
        <Flex
          className='doughnut-row'
          flexWrap='wrap'
          flexDir='row'
          justifyContent='center'
          alignItems='center'>
          <Box className='doughnut-small'></Box>
          <Box className='doughnut-big'
            margin={{base: '0px 40px', md:'0px 80px', lg: '0px 110px' }}></Box>
          <Box className='doughnut-small'></Box>
        </Flex>

        <Flex
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
        </Flex>
      </Flex>
    )
  }
}

export default Section5;
