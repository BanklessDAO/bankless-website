import React from 'react'

import '@fontsource/clear-sans/500.css'
import '@fontsource/clear-sans/700.css'

import { Flex, Box, Heading, Button } from '@chakra-ui/react'

import Underline from 'components/_common/underline'
import styles from 'styles/NavBar.module.css'

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
          className={`${styles['header-text']}`}
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
            gap='3rem'
            justifyContent={'center'}
            width='100%'
            alignItems={'center'}
          >
            <Button
              as='a'
              href={'https://discord.com/invite/bankless'}
              target='_blank'
              color={'#ffff'}
              variant='solid'
              transition='1s'
              fontSize='1.5rem'
              height='4rem'
              width='16rem'
              bg='#ff1013'
              borderRadius='1rem'
              _hover={{
                bg: '#ff1013',
                color: '#ffff',
                transform: 'scale(0.93)',
              }}
              _focus={{
                outline: 'none',
              }}
            >
              Join Us
            </Button>
            <Button
              as='a'
              href={'/bankless-website/about-us'}
              color={'#ff1013'}
              variant='outline'
              transition='1s'
              fontSize='1.5rem'
              height='4rem'
              width='16rem'
              border='2px'
              borderRadius='1rem'
              borderColor={'#ff1013'}
              _hover={{
                bg: '#ff1013',
                color: '#ffff',
                transform: 'scale(0.93)',
              }}
              _focus={{
                outline: 'none',
              }}
            >
              Learn More
            </Button>
          </Flex>
          <Box h={'300px'}>
            <video
              width='100%'
              height={'100%'}
              autoPlay
              loop
              muted
              playsInline
              style={{
                height: '300px',
              }}
            >
              <source src='/bankless-website/videos/DAOhandLogo.mp4' type='video/mp4' />
              <source src='/bankless-website/videos/DAOhandLogo.webm' type='video/webm' />
              <source src='/bankless-website/videos/DAOhandLogo.ogv' type='video/ogg' />
              {/* Add additional source formats as needed */}
            </video>
          </Box>
        </Flex>
      </>
    )
  }
}

export default Section1
