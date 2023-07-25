import React from 'react'
import { Flex, Text, Container, VStack, Button, Link } from '@chakra-ui/react'

function Nfts() {
  return (
    <Container maxW={'6xl'} p={0}>
      <Flex
        justifyContent={{ base: 'center', sm: 'center', xl: 'space-between' }}
        // justifyContent='space-between'
        // flexDirection={{ base: 'column', sm: 'column', xl: 'row' }}
        direction={{ base: 'column', xl: 'row' }}
        alignItems={'center'}
        py={10}
      >
        <VStack h='full' pt={10} spacing={10} align='flex'>
          <Text fontWeight={700} fontSize='4xl' lineHeight='43px'>
            Chippi
          </Text>
          <Container
            position='relative'
            display='flex'
            justifyContent='center'
            flexDirection='column'
            className='border-box'
            width={{ base: '100%', md: '458px' }}
            height={{ base: '300px', md: '250px' }}
          >
            <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
              {`Chippi are hand-drawn 1-of-1s from BanklessDAO contributor Perchy.
              These profile pictures (PFPs) are members of the Chippiverse,
              playing a role in “The Future is DAO” storyline. Chippi inhabit
              the Bankless Nation, a series of art pieces available as NFTs.`}
            </Text>
            <Container
              position='absolute'
              bottom={0}
              display='flex'
              width={'90%'}
              justifyContent='center'
            >
              <Link
                href='https://opensea.io/collection/chippi'
                isExternal
                style={{ textDecoration: 'none' }}
              >
                <Button as='a' textDecorationLine={'none'} fontWeight={800}>
                  Learn more about Chippi
                </Button>
              </Link>
            </Container>
          </Container>
        </VStack>
        <VStack pt={10} spacing={10} align='flex'>
          <Text fontWeight={700} fontSize='3xl' lineHeight='43px'>
            BanklessDAO Weekly NFT Showcase
          </Text>
          <Container
            position='relative'
            display='flex'
            justifyContent='center'
            flexDirection='column'
            className='border-box'
            width={{ base: '100%', md: '458px' }}
            height={{ base: '300px', md: '250px' }}
            margin={0}
          >
            <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
              {`BanklessDAO is embedded in the creative space of NFTs and a
              champion for artists paving the way in digital art forms. Weekly
              features can be found on BanklessDAO\'s Rarible page or the Weekly
              Rollup newsletter.`}
            </Text>
            <Container
              display='flex'
              position='absolute'
              bottom={0}
              width={'90%'}
              margin={'auto'}
              justifyContent='center'
            >
              <Link
                href='https://rarible.com/banklessdao/sale'
                isExternal
                style={{ textDecoration: 'none' }}
              >
                <Button as='a' textDecorationLine={'none'} fontWeight={800}>
                  Learn more
                </Button>
              </Link>
            </Container>
          </Container>
        </VStack>
      </Flex>
    </Container>
  )
}

export default Nfts
