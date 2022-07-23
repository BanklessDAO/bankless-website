import {
  Box,
  Heading,
  Text,
  Stack,
  VStack,
  Image,
  Flex,
} from '@chakra-ui/react'

export default function IntroductionComponent() {
  return (
    <>
      <Stack
        spacing={{ base: 0 }}
        mt={{ base: 5, md: 10 }}
        direction={{ base: 'column', md: 'row' }}>
        <VStack flex='1 0' alignItems='start'>
          <Heading
            color={'white.100'}
            lineHeight={1.1}
            fontWeight={700}
            fontFamily='Clear Sans'
            fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}
            textAlign='left'>
            Join
            <br />
            the most vibrant
            <br />
            community-run
            <br />
            Web3 organization
          </Heading>
          <Text
            color='grey'
            fontSize={{ base: 'xl', lg: '2xl' }}
            fontFamily='Clear Sans'
            mt={0}
            p={0}
            textAlign={'left'}>
            BanklessDAO’s ever-growing community of creatives, developers,
            innovators, and leaders is open to all.
            <br />
            <br />
            Always.
          </Text>
        </VStack>

        <Flex
          flex='0 0 48%'
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            as='figure'
            h={{ base: '40vw', lg: '26vw' }}
            w='100%'
            >
            <Image
              src={'/images/members.png'}
              alt={'Member Image'}
              w={'100%'}
              h={'100%'}
              fit={'contain'}
              align={'center'}
            />
          </Box>
        </Flex>
      </Stack>
    </>
  )
}
