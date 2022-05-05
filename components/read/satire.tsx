import React from 'react'
import Image from 'next/image'

import { Flex, Text, Grid, Box, Link, HStack, VStack } from '@chakra-ui/react'

class Satire extends React.Component {
  render() {
    return (
      <Grid
        gridTemplateColumns={{ base: '1fr', xl: '16vw 1fr' }}
        alignItems='center'
        gap={8}
        mt={20}
        pl={{base: 0, lg:'4rem'}}>
        <Flex flexDir='column' justifyContent='start' alignItems='start'>
          <Text
            fontWeight={700}
            fontSize={{base: '4xl', md:'6xl'}}
            textAlign='center'
            maxW={750}
            fontFamily='Clear Sans'>
            Satire
          </Text>
          <Text fontSize='lg' color='rgba(255, 255, 255, 0.57)'>
            A satire publication that takes money, seriously. Read and collect
            NFTs of their editions on{' '}
            <Link color='white' href='https://therug.mirror.xyz/'>
              Mirror
            </Link>{' '}
            and follow along on{' '}
            <Link color='white' href='https://twitter.com/TheRugNews'>
              Twitter.
            </Link>
          </Text>
          <Link
            display='flex'
            alignItems='baseline'
            marginRight='2'
            marginTop='4'
            href='https://therug.mirror.xyz/'>
            <HStack gap={2}>
              <Text
                fontWeight={700}
                fontSize='2xl'
                marginRight='2'
                textAlign='center'>
                The Rug
              </Text>
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
        </Flex>
        <Grid
          gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
          justifyContent='flex-start'
          alignItems='flex-start'
          ml={{ base: 0, xl: '4rem' }}
          mt={{base: '2rem', md: 0}}>
          <VStack alignItems='flex-start' justifyContent='flex-start' h='100%'>
            <Link
              display='flex'
              alignItems='baseline'
              mr={{base: 0, md:'2'}}
              ml={{base: '4px', md:0}}
              mt={{base: 0, md:'8'}}
              href='https://therug.mirror.xyz/'>
              <HStack gap={2}>
                <Image
                  src='/icons/mirror.png'
                  alt='mirror'
                  height={30}
                  width={30}

                />
                <Text
                  fontWeight={700}
                  fontSize='2xl'
                  mr='2'
                  textAlign='center'>
                  Mirror
                </Text>
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
            <Text
              fontSize='md'
              color='rgba(255, 255, 255, 0.57)'
              pl={{base: '50px', md:'36px'}}
              maxW={{ base: '80%', xl: '240px' }}>
              Collect NFTs of Satire edition on Mirror.
            </Text>
          </VStack>

          <VStack alignItems='flex-start' justifyContent='flex-start' h='100%'>
            <Link
              display='flex'
              alignItems='baseline'
              marginRight='2'
              marginTop='8'
              href='https://twitter.com/TheRugNews'>
              <HStack gap={2} height={30}>
                <Image
                  src='/icons/twitter.png'
                  alt='twitter'
                  height={30}
                  width={35}
                />
                <Text
                  fontWeight={700}
                  fontSize='2xl'
                  marginRight='2'
                  textAlign='center'>
                  Twitter
                </Text>
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
            <Text
              fontSize='md'
              color='rgba(255, 255, 255, 0.57)'
              pl={'52px'}
              maxW={{ base: '100%', xl: '240px' }}>
              Follow Satire on Twitter.
            </Text>
          </VStack>
        </Grid>
      </Grid>
    )
  }
}

export default Satire
