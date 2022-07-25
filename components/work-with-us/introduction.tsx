import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { ChakraNextImage } from 'components/_common/ChakraNextImage'

export default function IntroductionComponent() {
  return (
    <>
      <Box
        as={Box}
        textAlign={'center'}
        pt={{ base: 0, md: '4rem' }}
        pb={{ base: '1rem', md: '6rem' }}>
        <Heading
          color={'white.100'}
          lineHeight={1}
          fontWeight={700}
          fontFamily='Clear Sans'
          fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}>
          Web3 products and services
          <br />
          from crypto-native contributors
        </Heading>
        <Text
          color='grey'
          w={{ base: '100%', xl: '64%' }}
          mx={'auto'}
          fontSize={{ base: 'xl', lg: '2xl' }}
          fontFamily='Clear Sans'
          marginTop={'2rem'}
          textAlign={'center'}>
          BanklessDAO has multiple consulting, media, and development arms
          within its arsenal.
          <br />
          <br />
          Commission BanklessDAO’s talent now.
        </Text>
      </Box>
      <ChakraNextImage
        src='/images/work-with-us/work-with-us-1.jpg'
        alt='Web3 products and services'
        height={{ base: '224px', lg: '400px' }}
        width={'full'}
        objectFit='cover'
        borderRadius='104px'
      />
    </>
  )
}
