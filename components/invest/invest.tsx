import React from 'react'
import Image from 'next/image'
import Gradient from 'rgt'

import { Flex, Text, Container, VStack } from '@chakra-ui/react'

function Invest() {
  return (
    <Container maxW='container.xl' p={0}>
      <Flex h='100vh' py={20}>
        <VStack h='full' w='full' p={10} spacing={10} alignItems='flex-start'>
          <Image
            src='/images/bank-token.png'
            alt='bankToken'
            height={422}
            width={402}
          />
        </VStack>
        <VStack spacing={10} alignItems='flex-start'>
          <Text fontWeight={700} fontSize='72px'>
            BANK
          </Text>
          <Gradient
            dir='top-to-bottom'
            from='#FF1013'
            to='#000000
'>
            <Text fontSize='4xl' fontWeight={700}>
              The Most widely-held Token{' '}
            </Text>
          </Gradient>
          <Text fontWeight={400} lineHeight='22px' fontSize='18px'>
            BANK is the native token of BanklessDAO. As a tool for the Bankless
            community, it determines membership level and voting power in
            on-chain votes. To be a Level 1 member, which means you can access
            the Discord server without needing a guest pass, you must hold
            35,000 BANK.
          </Text>
          <Container className='border-box' width='458px' height='131px'>
            <Text
              paddingTop={5}
              fontWeight={400}
              lineHeight='22px'
              fontSize='18px'>
              BANK is available on both Uniswap and Sushiswap and can be earned
              by working in the DAO. Many guest pass holders earn their 35,000
              BANK rather than buy it outright.
            </Text>
          </Container>
        </VStack>
      </Flex>
    </Container>
  )
}

export default Invest
