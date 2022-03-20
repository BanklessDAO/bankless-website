import React from 'react';

import { Flex, Box } from '@chakra-ui/react';

class ThreeRings extends React.Component {
  render() {
    return (
      <Flex
        marginTop={32}
        flexWrap='wrap'
        flexDir='row'
        justifyContent='center'
        alignItems='center' >
        <Box
          borderRadius='100%'
          height='80px'
          width='80px'
          background='radial-gradient(
            circle,
            transparent 40%,
            rgba(255, 16, 19, 0.21) 40%
          )'></Box>
        <Box 
          borderRadius='100%'
          height='140px'
          width='140px'
          margin={{ base: '0px 40px', md: '0px 80px', lg: '0px 110px' }}
          background='radial-gradient(circle, transparent 40%, red 40%)'></Box>
        <Box
          borderRadius='100%'
          height='80px'
          width='80px'
          background='radial-gradient(
            circle,
            transparent 40%,
            rgba(255, 16, 19, 0.21) 40%
          )'></Box>
      </Flex>
    )
  }
}

export default ThreeRings