import React from 'react'
import Image from 'next/image'
import BankSection from './bankSection'
import BedIndex from './BedIndex'
import { Flex, Text, Container, VStack, Button } from '@chakra-ui/react'

function Invest() {
  return (
    <Container maxW={{ base: 'container.md', md: 'container.xl' }} p={0}>
      <BankSection />
      <BedIndex />
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
          <VStack
            justifyContent={'flex-end'}
            display='flex'
            p={10}
            spacing={10}>
            <Container>
              <Button
                onClick={() =>
                  window.open('https://app.indexcoop.com/gmi', '_blank')
                }>
                <Container display={'flex'} align='center'>
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
      <Container maxW='container.xl' p={0}>
        <Flex py={20}>
          <VStack p={10} spacing={10} align='flex-start'>
            <Image
              src='/images/DAO-Punk-Invest.png'
              alt='bankToken'
              height={533}
              width={525}
            />
          </VStack>
          <VStack spacing={10}>
            <Container>
              <Text fontWeight={700} fontSize='5xl' lineHeight='58px'>
                DAO Punks
              </Text>
              <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
                DAOpunks launched in 2021 with the mission of helping to free
                all humans from the soul-sucking drudgery of default world work.
                They do that work through providing grants to those who seek to
                leave the CORPrat life for the meaningful work found in DAOs.
                Holders of a DAOpunk NFT enjoy access to gated channels, but the
                community is open to anyone with an interest in DAOs. In
                addition to grants, the DAOpunks have a newsletter, podcast, and
                merch arm, and are always spinning new ideas into actionable
                content. DAOpunks is at the edge of DAO governance, and is
                pushing the boundaries of where technology meets on-chain voting
                and automatic treasury triggers.
              </Text>
            </Container>
            <Container>
              <Button
                onClick={() =>
                  window.open(
                    'https://opensea.io/collection/daopunksnft',
                    '_blank'
                  )
                }>
                Invest in DAO Punks
              </Button>
            </Container>
          </VStack>
        </Flex>
      </Container>

      <Container maxW='container.xl' p={0}>
        <Flex justifyContent='space-between' py={10}>
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
                Chippi are hand-drawn 1-of-1s from BanklessDAO contributor
                Perchy. These profile pictures (PFPs) are members of the
                Chippiverse, playing a role in “The Future is DAO” storyline.
                Chippi inhabit the Bankless Nation, a series of art pieces
                available as NFTs.
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
                features can be found on BanklessDAO’s Rarible page or the
                Weekly Rollup newsletter.
              </Text>
              <Container
                display='flex'
                position='absolute'
                bottom={0}
                justifyContent='center'>
                <Button
                  onClick={() =>
                    window.open(
                      'https://rarible.com/banklessdao/sale',
                      '_blank'
                    )
                  }>{`Invest in NFT's`}</Button>
              </Container>
            </Container>
          </VStack>
        </Flex>
      </Container>
    </Container>
  )
}

export default Invest
