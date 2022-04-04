import React from 'react'
import Image from 'next/image'

import { Box, Flex, Text, HStack, VStack, Link } from '@chakra-ui/react'

class Section1 extends React.Component {
  render() {
    return (
      <Flex flexDirection='column' justifyContent='center' alignItems='center' rowGap={8}>

          <HStack>

            <VStack
              alignItems='start'
              width={{ base: '100%', md: '60%' }}
              rowGap={4}>
              <Text fontSize={{ base: '4xl', md: '2xl' }} fontWeight={700}>
                Decentralizing media one article at a time
              </Text>
              <Text color='grey'>
                BanklessDAO is building the first decentralized publishing house
                ever. Our newsletters and articles are translated into a variety of
                languages to reach a global audience. Find your crypto reading
                materials right here.
              </Text>
            </VStack>

            <Box display={{ base: 'none', md: 'flex' }}>
              <Image
                src='/read/pen-01.png'
                height={250}
                width={250}
                alt='Bhutan'
              />
            </Box>

          </HStack>

          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            columnGap={8}
            rowGap={8}>

            <VStack alignItems='start' maxW={{ base: '100%', md: '30%' }}>
              <Flex justify='center' alignItems='center' background='#222222' borderRadius='8px' padding='10px'>
                <Image
                  src='/icons/medium.png'
                  alt='medium'
                  height={30}
                  width={45}
                />
              </Flex> 
              <HStack justifyContent='center' alignItems='baseline'>
                <Text fontSize={{ base: '4xl', md: '4xl' }} fontWeight={700}>Medium Article</Text>
                <Link href='#'>
                  <Image
                    src='/icons/arrow.png'
                    alt='arrow'
                    height={15}
                    width={15}
                  />
                </Link>
              </HStack>

              <Text fontSize='xl'>Crypto and Web3 commentary representing the voice of the DAO. </Text>
            </VStack>

            <VStack alignItems='start' maxW={{ base: '100%', md: '30%' }}>
              <Flex justify='center' alignItems='center' background='#222222' borderRadius='8px' padding='10px'>
                <Image
                  src='/icons/mirror.png'
                  alt='mirror'
                  height={30}
                  width={25}
                />
              </Flex> 
              <HStack justifyContent='center' alignItems='baseline'>
                <Text fontSize={{ base: '4xl', md: '4xl' }} fontWeight={700}>Mirror Article</Text>
                <Link href='#'>
                  <Image
                    src='/icons/arrow.png'
                    alt='arrow'
                    height={15}
                    width={15}
                  />
                </Link>
              </HStack>

              <Text fontSize='xl'>BanklessDAO history andseason recaps posted publicly.</Text>
            </VStack>

          </Flex>

      </Flex>
    )
  }
}

export default Section1
