import React from 'react'
import Image from 'next/image'

import '@fontsource/clear-sans/500.css'
import '@fontsource/clear-sans/700.css'

import { Flex, Box, Text, HStack, chakra, Link } from '@chakra-ui/react'

import Underline from 'components/common/underline'

class Section1 extends React.Component {
  render() {
    return (
      <>
        <Box
          position='absolute'
          top='-10rem'
          left={{ base: '-10rem', sm: '-40rem' }}
          bgGradient='linear(to-br, rgba(255, 16, 19, 0.4) 25%, rgba(0,0,0,0) 90%)'
          filter='auto'
          blur='150px'
          h={{ base: '40rem', md: '50rem' }}
          w={{ base: '30rem', sm: '70rem', md: '80rem' }}
          opacity={{ base: '70%', md: '100%' }}
          borderRadius='full'
        ></Box>

        <Flex
          flexDir='column'
          justifyContent='center'
          alignItems='center'
          zIndex='docked'
          paddingX={{ base: 8, md: 16 }}
          rowGap={{ base: 4, md: 8 }}
        >
          <Text
            fontWeight={700}
            fontSize={{ base: '4xl', md: '6xl' }}
            minW={{ base: '300px' }}
            w={{ base: '18rem', md: '60rem' }}
            textAlign='center'
            maxW={750}
          >
            Media and Social DAO Onboarding 1 billion people to crypto
          </Text>
          <Underline />

          <Text fontWeight={'700'} mb='4rem' fontSize='xl'>
            <chakra.span
              fontSize='xl'
              fontWeight='700'
              color='gray'
              background='none'
            >
              We’re Headed West.
            </chakra.span>{' '}
            Join Us
          </Text>
          <Box w={{ base: '150vw', md: '100%' }}>
            <video width='100%' height={'auto'} autoPlay loop muted playsInline>
              <source src='/videos/DAOhandLogo.mp4' type='video/mp4' />
            </video>
          </Box>
        </Flex>
      </>
    )
  }
}

export default Section1
