import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { ChakraNextImage } from 'components/_common/ChakraNextImage'

export default function IntroductionComponent() {
  return (
    <>
      <Box
        as='section'
        textAlign={'center'}
        pt={{ base: 0, md: '8rem' }}
        pb={{ base: 0, md: '4rem' }}
        pos='relative'>
        <Heading
          color={'white.100'}
          lineHeight={1}
          fontWeight={700}
          fontFamily='Clear Sans'
          fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}
          zIndex='1'>
          Web3 products and services
          <br />
          from crypto-native contributors
        </Heading>
        <Text
          color={'white.300'}
          w={{ base: '100%', xl: '64%' }}
          mx={'auto'}
          fontSize={{ base: 'xl', lg: '2xl' }}
          fontFamily='Clear Sans'
          marginTop={'2rem'}
          textAlign={'center'}
          pb={{ base: '4rem', md: '4rem' }}>
          BanklessDAO has multiple consulting, media, and development arms
          within its arsenal.
          <br />
          <br />
          Commission BanklessDAO’s talent now.
        </Text>
        <>
          <Box
            as='span'
            h={'40rem'}
            w={'60rem'}
            pos='absolute'
            zIndex='0'
            top='0%'
            left={{ lg: '-160%', xl: '-40%' }}
            opacity={{ base: '0', lg: '0.6' }}
            bgGradient='linear-gradient(121.75deg, rgba(255, 16, 19, 0.6) 58%, rgba(140,29,207,0.6) 0%)'
            filter='blur(6rem)'
            transform='rotate(90deg)'
          />
          <Box
            as='span'
            h={'50rem'}
            w={'40rem'}
            pos='absolute'
            zIndex='0'
            bottom={{ base: '20%', lg: '-40%', xl: '-20%' }}
            right={{ base: '-80%', md: '-120%', xl: '-40%' }}
            opacity={{ base: '0.2', lg: '0.4' }}
            bgGradient='linear-gradient(121.75deg, rgba(255, 16, 19, 0.6) 58%, rgba(140,29,207,0.6) 0%)'
            filter='blur(6rem)'
          />
        </>
        <ChakraNextImage
          src='/images/work-with-us/work-with-us-1.jpg'
          alt='Web3 products and services'
          height={{ base: '224px', lg: '400px' }}
          width={'full'}
          objectFit='cover'
          borderRadius='104px'
        />
      </Box>
    </>
  )
}
