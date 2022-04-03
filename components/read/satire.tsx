import React from 'react'
import Image from 'next/image'

import { HStack, Text, Grid, VStack, Box, Link, GridItem } from '@chakra-ui/react'

class Satire extends React.Component {
  render() {
    return (
      <HStack
        justifyContent='center'
        alignItems='center'
        rowGap={{ base: 2, md: 4 }}
      >
        <Box>
          <Text fontWeight={700} fontSize='6xl' textAlign='center' maxW={750}>
            Satire
          </Text>
          <Text fontSize='md' color='rgba(255, 255, 255, 0.57)'>A satire publication that takes money, seriously. 
          Read and collect NFTs of their editions on Mirror and follow along on Twitter.</Text>
        </Box>

      </HStack>
    )
  }
}

export default Satire
