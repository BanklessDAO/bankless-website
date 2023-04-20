import React from 'react'

import '@fontsource/clear-sans/500.css'
import '@fontsource/clear-sans/700.css'

import { Flex, Box, Text, Heading } from '@chakra-ui/react'

import Underline from 'components/_common/underline'

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
          w={{ base: '100%', sm: '70rem', md: '80rem' }}
          opacity={{ base: '70%', md: '100%' }}
          borderRadius='full'
        />

        <Flex
          flexDir='column'
          justifyContent='center'
          alignItems='center'
          zIndex='docked'
          pt={{ base: 0, md: '8rem' }}
          pb={{ base: 0, md: '4rem' }}
          rowGap={{ base: '4rem', md: '2rem' }}
          w='100%'
        >
          <Heading
            textAlign='center'
            color={'white.100'}
            lineHeight={1.2}
            fontWeight={700}
            fontFamily='Clear Sans'
            fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}
            zIndex='1'
          >
            Media and Social DAO
            <br />
            Onboarding 1 billion people
            <br /> to crypto
          </Heading>
          <Box width={{ base: '50%', md: '100%' }}>
            <Underline />
          </Box>

          <Flex
            direction={{ base: 'column', md: 'row' }}
            justifyContent='center'
            width='100%'
          >
            <Text
              color={'grey'}
              flex='0 0 auto'
              fontSize={{ base: 'xl', lg: '2xl' }}
              fontFamily='Clear Sans'
              marginTop={'2rem'}
              textAlign={'center'}
              pb={{ base: '0rem', md: '4rem' }}
            >
              We’re Headed West.
            </Text>
            <Text
              color={'white.300'}
              flex='0 0 auto'
              fontSize={{ base: 'xl', lg: '2xl' }}
              fontFamily='Clear Sans'
              marginTop={{ base: '0rem', md: '2rem' }}
              textAlign={'center'}
              pl='1rem'
              pb={{ base: '4rem', md: '4rem' }}
            >
              {`Join Us`}
            </Text>
          </Flex>
          <Box w={{ base: '100%', md: '150%' }}>
            <video
              width='100%'
              height={'200px'}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src='/videos/DAOhandLogo.mp4' type='video/mp4' />
            </video>
          </Box>
        </Flex>
      </>
    )
  }
}

export default Section1
