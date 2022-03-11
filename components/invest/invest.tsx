import React from 'react'
import Image from 'next/image'
import Gradient from 'rgt'

import { Flex, Text, Container, VStack, Button } from '@chakra-ui/react'

function Invest() {
  return (
    <>
      <Container maxW='container.xl' p={0}>
        <Flex py={20}>
          <VStack h='full' w='full' p={10} spacing={10} alignItems='flex-start'>
            <Image
              src='/images/bank-token.png'
              alt='bankToken'
              height={422}
              width={402}
            />
          </VStack>
          <VStack spacing={5} alignItems='flex-start'>
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
              BANK is the native token of BanklessDAO. As a tool for the
              Bankless community, it determines membership level and voting
              power in on-chain votes. To be a Level 1 member, which means you
              can access the Discord server without needing a guest pass, you
              must hold 35,000 BANK.
            </Text>
            <Container className='border-box' width='458px' height='131px'>
              <Text
                paddingTop={5}
                fontWeight={400}
                lineHeight='22px'
                fontSize='18px'>
                BANK is available on both Uniswap and Sushiswap and can be
                earned by working in the DAO. Many guest pass holders earn their
                35,000 BANK rather than buy it outright.
              </Text>
            </Container>
            <Text>
              Current market cap and price is{' '}
              <span style={{ color: '#D02128' }}>Available Here</span>
            </Text>
          </VStack>
        </Flex>
      </Container>
      <Container maxW='container.xl' p={0}>
        <Flex py={20}>
          <VStack spacing={10} alignItems='flex-start'>
            <Container maxW='container.xl'>
              <Text fontWeight={700} fontSize='5xl'>
                BED Index
              </Text>
              <Text lineHeight='22px' fontSize='lg' fontWeight={700}>
                <Gradient
                  dir='top-to-bottom'
                  from='#FF1013'
                  to='#000000
'>
                  The only index that can get ETH and BTC maxis in BED together
                </Gradient>
              </Text>
            </Container>
            <Container maxW='container.xl'>
              <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
                The only index that can get ETH and BTC maxis in BED together
                The Bankless BED Index is a passive investment vehicle weighted
                equally in Bitcoin, Ethereum, and the DeFi Pulse Index (DPI),
                which tracks high-usage DeFi assets. This index gives you
                exposure to crypto without having to research DeFi projects or
                constantly rebalance your portfolio. This is a great first
                crypto investment for anyone just starting their crypto journey.
                The fund is a cooperation between BanklessDAO and Index Coop, a
                provider of DeFi investment products
              </Text>
            </Container>
            <Container display='flex' justifyContent='space-evenly'>
              <Button onClick={() => null}>
                <Container padding={0} paddingRight={2}>
                  <Image
                    src='/images/bed-token.png'
                    alt='bed-token'
                    height={23}
                    width={23}
                  />
                </Container>
                Invest in BED index
              </Button>
              <Button onClick={() => null}>Learn more about Bed Index </Button>
            </Container>
          </VStack>
          <VStack h='full' w='full' p={10} spacing={10} alignItems='flex-end'>
            <Image
              src='/images/bed-token.png'
              alt='bed-token'
              height={454}
              width={454}
            />
          </VStack>
        </Flex>
      </Container>
      <Container maxW='container.lg' p={0}>
        <Flex py={20}>
          <VStack spacing={10}>
            <Container maxW='container.xl'>
              <Text fontWeight={700} fontSize='5xl'>
                GMI INDEX
              </Text>
              <Text
                color={'#D02128'}
                lineHeight='43px'
                fontSize='36px'
                fontWeight={700}>
                Are you GMI?
              </Text>
            </Container>
            <Container maxW='container.xl'>
              <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
                The Bankless DeFi Innovation Index, called the GMI Index for the
                rally cry “we’re all gonna make it” is another investment
                vehicle springing from the Index Coop/BanklessDAO partnership.
                Like the BED Index, GMI captures a broad swath of DeFi exposure
                while also tapping into gains from sophisticated products such
                as yield-bearing tokens.
              </Text>
            </Container>
          </VStack>
          <VStack p={10} spacing={10}>
            <Container
              flexDirection='column'
              gap={'10px'}
              display='flex'
              justifyContent={'space-between'}>
              <Button onClick={() => null}>
                <Container
                  display={'flex'}
                  justifyContent='space-evenly'
                  paddingRight={2}>
                  <Image
                    src='/images/bed-token.png'
                    alt='bed-token'
                    height={23}
                    width={23}
                  />
                  Invest in GMI Index
                </Container>
              </Button>
            </Container>
          </VStack>
        </Flex>
      </Container>
    </>
  )
}

export default Invest
