import React from 'react'
import Image from 'next/image'

import { Box, Flex, Text, HStack, VStack, Link } from '@chakra-ui/react'
import { ChakraNextImage } from 'components/common/ChakraNextImage'

class Hero extends React.Component {
  render() {
    return (
      <Flex
        flexDirection='column'
        justifyContent='start'
        alignItems='start'
        rowGap={8}>
        <HStack position='relative'>
          <VStack
            alignItems='start'
            width={{ base: '100%', md: '60%' }}
            rowGap={4}>
            <Text fontSize={{ base: '4xl', md: '2xl' }} fontWeight={700}>
              Decentralizing media one article at a time
            </Text>
            <Text color='grey'>
              BanklessDAO is building the first decentralized publishing house
              ever. Our newsletters and articles are translated into a variety
              of languages to reach a global audience. Find your crypto reading
              materials right here.
            </Text>
          </VStack>

          <Box
            display={{ base: 'none', md: 'flex' }}
            position='absolute'
            right='8%'
            top={0}>
            <ChakraNextImage
              src='/read/pen-01.png'
              height={446 * 0.75}
              width={446 * 0.75}
              alt='Bhutan'
              zIndex={1}
            />
            <Box
              height={446}
              width={446}
              bg='linear-gradient(121.75deg, rgba(255, 16, 19, 0.5) 16.9%, rgba(140, 29, 207, 0) 88.02%)'
              position='absolute'
              zIndex='0'
              filter='blur(600px)'
            />
          </Box>
        </HStack>

        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          columnGap={8}
          rowGap={8}
          pt={'6rem'}>
          <VStack alignItems='start' maxW={{ base: '100%', md: '40%' }}>
            <Flex
              justify='center'
              alignItems='center'
              background='#222222'
              borderRadius='8px'
              padding='10px'>
              <Image
                src='/icons/medium.png'
                alt='medium'
                height={30}
                width={45}
              />
            </Flex>
            <HStack justifyContent='center' alignItems='baseline'>
              <Text fontSize={{ base: '4xl', md: '4xl' }} fontWeight={700}>
                Medium Article
              </Text>
              <Link href='https://medium.com/bankless-dao'>
                <Image
                  src='/icons/arrow.png'
                  alt='arrow'
                  height={15}
                  width={15}
                />
              </Link>
            </HStack>

            <Text fontSize='xl'>
              Crypto and Web3 commentary representing the voice of the DAO.{' '}
            </Text>
          </VStack>

          <VStack alignItems='start' maxW={{ base: '100%', md: '30%' }}>
            <Flex
              justify='center'
              alignItems='center'
              background='#222222'
              borderRadius='8px'
              padding='10px'>
              <Image
                src='/icons/mirror.png'
                alt='mirror'
                height={30}
                width={25}
              />
            </Flex>
            <HStack justifyContent='center' alignItems='baseline'>
              <Text fontSize={{ base: '4xl', md: '4xl' }} fontWeight={700}>
                Mirror Article
              </Text>
              <Link href='https://banklessdao.mirror.xyz/'>
                <Image
                  src='/icons/arrow.png'
                  alt='arrow'
                  height={15}
                  width={15}
                />
              </Link>
            </HStack>

            <Text fontSize='xl'>
              BanklessDAO history and season recaps posted publicly.
            </Text>
          </VStack>
        </Flex>
      </Flex>
    )
  }
}

export default Hero
