import React from 'react'

import { Flex, Box } from '@chakra-ui/react'

class ThreeRings extends React.Component {
  render() {
    return (
      <Flex
        marginTop={{ base: '0', md: '20' }}
        flexWrap='wrap'
        flexDir='row'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          borderRadius='100%'
          height={{ base: '60px', sm: '80px' }}
          width={{ base: '60px', sm: '80px' }}
          background='radial-gradient(
            circle,
            transparent 40%,
            rgba(255, 16, 19, 0.21) 40%
          )'
        ></Box>
        <Box
          borderRadius='100%'
          height={{ base: '100px', sm: '140px' }}
          width={{ base: '100px', sm: '140px' }}
          margin={{
            base: '0px 30px',
            sm: '0px 40px',
            md: '0px 80px',
            lg: '0px 110px',
          }}
          background='radial-gradient(circle, transparent 40%, #D02128 40%)'
        ></Box>
        <Box
          borderRadius='100%'
          height={{ base: '60px', sm: '80px' }}
          width={{ base: '60px', sm: '80px' }}
          background='radial-gradient(
            circle,
            transparent 40%,
            rgba(255, 16, 19, 0.21) 40%
          )'
        ></Box>
      </Flex>
    )
  }
}

export default ThreeRings
