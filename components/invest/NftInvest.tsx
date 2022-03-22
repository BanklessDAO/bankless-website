import React from 'react'
import {
  Flex,
  Text,
  Container,
  VStack,
  Button,
} from '@chakra-ui/react'

function NftInvest() {
  return (
    <Container maxW='container.xl' p={0}>
      {console.log("test")}
      <Flex
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'row' }}
        py={10}>
        <VStack h='full' w='30%' p={10} spacing={10} align='flex-start'>
          <Text fontWeight={700} fontSize='4xl' lineHeight='43px'>
            Chippi
          </Text>
          <Container
            position='relative'
            display='flex'
            justifyContent='center'
            flexDirection='column'
            className='border-box'
            width='458px'
            height='250px'>
            <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
              Chippi are hand-drawn 1-of-1s from BanklessDAO contributor Perchy.
              These profile pictures (PFPs) are members of the Chippiverse,
              playing a role in “The Future is DAO” storyline. Chippi inhabit
              the Bankless Nation, a series of art pieces available as NFTs.
            </Text>
            <Container
              position='absolute'
              bottom={0}
              display='flex'
              justifyContent='center'>
              <Button onClick={() => null}>Invest in Chippi</Button>
            </Container>
          </Container>
        </VStack>
        <VStack p={10} spacing={10}>
          <Text fontWeight={700} fontSize='4xl' lineHeight='43px'>
            BanklessDAO Weekly NFT Showcase
          </Text>
          <Container
            position='relative'
            display='flex'
            justifyContent='center'
            flexDirection='column'
            className='border-box'
            width='458px'
            height='250px'>
            <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
              BanklessDAO is embedded in the creative space of NFTs and a
              champion for artists paving the way in digital art forms. Weekly
              features can be found on BanklessDAO’s Rarible page or the Weekly
              Rollup newsletter.
            </Text>
            <Container
              display='flex'
              position='absolute'
              bottom={0}
              justifyContent='center'>
              <Button
                onClick={() =>
                  window.open('https://rarible.com/banklessdao/sale', '_blank')
                }>{`Invest in NFT's`}</Button>
            </Container>
          </Container>
        </VStack>
      </Flex>
    </Container>
  )
}

export default NftInvest
