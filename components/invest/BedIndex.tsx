import React from 'react'
import Image from 'next/image'
import Gradient from 'rgt'
import {
  Flex,
  Text,
  Container,
  VStack,
  Button,
  useMediaQuery,
} from '@chakra-ui/react'

function BedIndex() {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <Container maxW={{ base: 'container.sm', md: 'container.xl' }} p={0}>
      <Flex py={20}>
        <VStack spacing={10} align='flex-start'>
          <Container maxW={{ base: 'container.sm', md: 'container.xl' }}>
            <Flex justify={'space-evenly'}>
              {isMobile ? (
                <Image
                  src='/images/bed-mobile.png'
                  alt='bed-token'
                  height={45}
                  width={45}
                />
              ) : null}
              <Text fontWeight={700} fontSize='5xl'>
                BED Index
              </Text>
            </Flex>
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
              The only index that can get ETH and BTC maxis in BED together The
              Bankless BED Index is a passive investment vehicle weighted
              equally in Bitcoin, Ethereum, and the DeFi Pulse Index (DPI),
              which tracks high-usage DeFi assets. This index gives you exposure
              to crypto without having to research DeFi projects or constantly
              rebalance your portfolio. This is a great first crypto investment
              for anyone just starting their crypto journey. The fund is a
              cooperation between BanklessDAO and Index Coop, a provider of DeFi
              investment products
            </Text>
          </Container>
          <Container
            display='flex'
            justifyContent='space-evenly'
            alignItems={'center'}
            flexDirection={{ base: 'column', md: 'row' }}>
            <Button
              margin='10px 0px;'
              onClick={() =>
                window.open('https://app.indexcoop.com/bed', '_blank')
              }>
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
            <Button
              onClick={() =>
                window.open(
                  'https://www.bankless.community/bed-index',
                  '_blank'
                )
              }>
              Learn more about Bed Index{' '}
            </Button>
          </Container>
        </VStack>
        <VStack h='full' w='full' p={10} spacing={10} align='flex-end'>
          {!isMobile ? (
            <Image
              src='/images/bed-token.png'
              alt='bed-token'
              height={454}
              width={454}
            />
          ) : null}
        </VStack>
      </Flex>
    </Container>
  )
}

export default BedIndex
