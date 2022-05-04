import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { ChakraNextImage } from 'components/common/ChakraNextImage'

export default function IntroductionComponent() {
  return (
    <>
      <VStack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        pt={{ base: 0, md: 18 }}
        pb={{ base: 10, md: 18 }}
        mb={{base: 0, md:8}}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '4xl', sm: '3xl', md: '7xl' }}
          lineHeight={'110%'}
          color={'white.100'}
          maxW={'94%'}
          fontFamily='Clear Sans'>
          {`Web3 products and services \n from crypto-native contributors`}
        </Heading>
        <Text
          color={'white.200'}
          fontSize={{ base: 'md' }}
          m={0}
          marginTop={'2rem'}
          w={{sm: '92%', md: '56%'}}
          fontFamily='Clear Sans'>
          BanklessDAO has multiple consulting, media, and development arms
          within its arsenal.
          <br />
          Commission BanklessDAO’s talent now:
        </Text>
      </VStack>
      <ChakraNextImage
        src='/images/work-with-us/work-with-us-1.jpg'
        alt='Web3 products and services'
        height={{ base:'224px', lg: '400px' }}
        width={'full'}
        objectFit='cover'
        borderRadius='104px'
      />
    </>
  )
}
