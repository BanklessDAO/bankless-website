import { Box, Heading, Text, Stack } from '@chakra-ui/react'
import { ChakraNextImage } from 'components/common/ChakraNextImage'

export default function IntroductionComponent() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 10, md: 18 }}
        mb={8}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'110%'}
          color={'white.100'}>
          Web3 products and services <br />
          <Text
            as={'span'}
            fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
            color={'white.100'}>
            from crypto-native contributors
          </Text>
        </Heading>
        <Text color={'white.200'} fontSize={{ sm: 'sm', md: 'md' }}>
          BanklessDAO has multiple consulting, media, and development arms
          within its arsenal.
          <br />
          Commission BanklessDAO’s talent now:
        </Text>
      </Stack>
      <ChakraNextImage
        src='/images/work-with-us/work-with-us-1.jpg'
        alt='Web3 products and services'
        height={{ sm: '27rem', lg: '400px' }}
        width={'full'}
        objectFit='cover'
        borderRadius="104px"
      />
    </>
  )
}
