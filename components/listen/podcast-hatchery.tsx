import React from 'react'
import { Flex, Box, Text, VStack, Heading } from '@chakra-ui/react'
import { CTAButton } from 'components/_common/CTAButton'
import { ChakraNextImage } from 'components/_common/ChakraNextImage'

const PodcastHatchery = () => (
  <>
    <Flex
      zIndex={'docked'}
      flexDirection={{ base: 'column', lg: 'row' }}
      justifyContent='center'
      alignItems='center'>
      <VStack
        mb='4rem'
        justifyContent='start'
        alignItems='start'
        rowGap='2rem'
        pt={{ base: 0, md: '8rem' }}
        pb={{ base: 0, md: '4rem' }}>
        <Heading
          color={'white.100'}
          lineHeight={1}
          fontWeight={700}
          fontFamily='Clear Sans'
          fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}
          zIndex='1'>
          The Podcast Hatchery
        </Heading>

        <Text
          color={'grey'}
          width={{ md: '25rem', lg: '32rem' }}
          mx={'auto'}
          fontSize={{ base: 'xl', lg: '2xl' }}
          fontFamily='Clear Sans'
          marginTop={'2rem'}
          textAlign={'left'}>
          Incubates audio storytelling projects. The team helps new podcasters
          find their audience, build their unique storytelling identity, and
          explore Web3 through interviews with thought-leaders in the space.
        </Text>
        <CTAButton
          url='https://open.spotify.com/show/1jLNOoJv77K733rZzL4c6b'
          text='Visit Podcast Hatchery'
          isExternal
        />

        <Text
          color={'grey'}
          width={{ md: '25rem', lg: '32rem' }}
          mx={'auto'}
          fontSize={{ base: 'xl', lg: '2xl' }}
          fontFamily='Clear Sans'
          marginTop={'2rem'}
          textAlign={'left'}>
          Check out these shows produced and hosted by members of BanklessDAO:
        </Text>
      </VStack>
      <Box
        display={{ base: 'none', lg: 'block' }}
        mt={{ base: '-1rem', md: '-5rem', lg: '-24rem' }}
        ml={{ base: '0', md: '0', lg: '0' }}
        mb={{ base: '5rem', md: '0' }}
        height={{ base: '16rem', md: '15rem', lg: '20rem' }}
        width={{ base: '16rem', md: '15rem', lg: '20rem' }}>
        <ChakraNextImage
          src='/bankless-website/listen/podcast-hatchery.png'
          alt='podcast-hatchery'
          height={500}
          width={500}
        />
      </Box>
    </Flex>

    <Box
      position='absolute'
      display={{ base: 'block', md: 'none' }}
      top={{ base: '5rem' }}
      left={{ base: '20%' }}
      bgGradient='linear(to-br, rgba(255, 16, 19, 0.4), rgba(0,0,0,0) 90%)'
      filter='auto'
      blur='90px'
      h={{ base: '25rem' }}
      w={{ base: '80%', lg: '50rem' }}
      borderRadius='full'
    />
  </>
)

export default PodcastHatchery
