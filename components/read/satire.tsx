import React from 'react'
import Image from 'next/image'

import { Flex, Text, Grid, VStack, Box, Link, GridItem, HStack } from '@chakra-ui/react'

class Satire extends React.Component {
  render() {
    return (
      <Grid
        gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)'}}
        gap={8}
      >
        <Flex flexDir='column' justifyContent='start' alignItems='start'>
          <Text fontWeight={700} fontSize='6xl' textAlign='center' maxW={750}>
            Satire
          </Text>
          <Text fontSize='md' color='rgba(255, 255, 255, 0.57)'>A satire publication that takes money, seriously. 
          Read and collect NFTs of their editions on <Link color='white' href='https://therug.mirror.xyz/'>Mirror</Link> and follow
           along on <Link color='white' href='https://twitter.com/TheRugNews'>Twitter.</Link></Text>
        </Flex>

        
        <Box>
          <Link
            display='flex'
            alignItems='baseline'
            marginRight='2'
            marginTop='8'
            href='https://therug.mirror.xyz/'>
            <HStack gap={2}>
              <Image
                src='/icons/mirror.png'
                alt='mirror'
                height={30}
                width={20}
              />
              <Text fontWeight={700} fontSize='2xl' marginRight='2' textAlign='center'>Mirror</Text>
            </HStack> 
            <Box marginLeft={2}>
              <Image
                src='/icons/arrow.png'
                alt='arrow'
                height={15}
                width={15}
              />
            </Box>
          </Link>
          <Text fontSize='md' color='rgba(255, 255, 255, 0.57)'>Collect NFTs of Satire edition on Mirror.</Text>
        </Box>

        <Box>
          <Link
            display='flex'
            alignItems='baseline'
            marginRight='2'
            marginTop='8'
            href='https://twitter.com/TheRugNews'>
            <HStack gap={2}>
              <Image
                src='/icons/twitter.png'
                alt='twitter'
                height={30}
                width={35}
              />
              <Text fontWeight={700} fontSize='2xl' marginRight='2' textAlign='center'>Twitter</Text>
            </HStack>
            <Box marginLeft={2}>
              <Image
                src='/icons/arrow.png'
                alt='arrow'
                height={15}
                width={15}
              />
            </Box>
          </Link>
          <Text fontSize='md' color='rgba(255, 255, 255, 0.57)'>Follow Satire on Twitter.</Text>
        </Box>

      </Grid>
    )
  }
}

export default Satire
