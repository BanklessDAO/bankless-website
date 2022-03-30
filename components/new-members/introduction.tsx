import { Box, Heading, Text, Stack, Image, Flex } from '@chakra-ui/react'

export default function IntroductionComponent() {
  return (
    <>
      <Stack
        align={{ base: 'flex-start', md: 'center' }}
        spacing={{ base: 8, md: 10 }}
        mt={{ base: 5, md: 10 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box flex={1}>
          <Stack spacing={{ base: 3, md: 4 }}>
            <Heading
              color={'white.100'}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Join the most
            </Heading>
            <Heading
              color={'white.100'}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              vibrant community-run
            </Heading>
            <Heading
              color={'white.100'}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Web3 organization
            </Heading>
          </Stack>

          <Text color={'grey'} fontSize={{ sm: 'sm', md: 'md' }} mt={'1.5rem'}>
            BanklessDAO’s ever-growing community of creatives, developers,
            innovators, and leaders is open to all. Always.
          </Text>
        </Box>

        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            overflow={'hidden'}
            w={'100%'}
            sx={{ height: { base: '250px', md: '300px' } }}
          >
            <Image
              alt={'Member Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'/images/members.png'}
            />
          </Box>
        </Flex>
      </Stack>
    </>
  )
}
