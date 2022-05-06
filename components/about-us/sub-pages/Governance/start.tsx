import { Stack, Flex, Box, Heading, Text, Image } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function GovernanceStartComponent() {
  return (
    <>
      <Stack
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 16 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            color={'white.100'}
            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
          >
            Get Started in
            <br />
            <Text
              as={'span'}
              color={'white.100'}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              Governance Today
            </Text>
          </Heading>
          <Text color={'white.100'} fontSize={{ sm: 'md', md: 'xl' }}>
            Join the
            <Text
              fontSize={{ sm: 'md', md: 'xl' }}
              color={'red'}
              display={'inline'}
            >
              &nbsp;Discussion on Forums
            </Text>
          </Text>
          <Flex align={'center'} color={'white.100'}>
            <Text
              mr={'0.25rem'}
              fontSize={{ base: '1xl', md: 'md' }}
              fontWeight={'bold'}
            >
              Buy Bank
            </Text>
            <FiArrowUpRight size={20} />
          </Flex>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'250px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://s3-alpha-sig.figma.com/img/798a/d025/0b0595ee8a595ebc99046de92bfc7933?Expires=1649030400&Signature=Ttf1xUvbrSqCAgjeEk7euyI7zGZYvNgbVRS7hgmbozg1p45-vj0YohbaQxmfx8eQ6yEvyadFSR8QmcyNxYDXNShuOmRa~A7Kr4p6XmUQT-0ZG5C9Z7v5mLxO~35HMEe1GxrHe~yUhmSPn3euiFUpJW8l4GwHu3MJkItJha4ql4mpw0Imk4hbshyxmPM9ltfKRgBL6Tm7bSIaJcJ2eXwi1tKdZ8R7geZCk9f0KoHjG1Qp0ZPrdg33u2HuOe2eDU-SxHMNHhX2zAyAy2nhJrYWmWX64tUDznjMi4-Rap1iody~6qclvOCxDzf3-lEYwbpzu8bpH~5RBPf9PSBkXmVapA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              }
            />
          </Box>
        </Flex>
      </Stack>

      <Text textAlign={'center'} fontSize={{ sm: 'md', md: 'xl' }}>
        Join the
        <Text
          fontSize={{ sm: 'md', md: 'xl' }}
          color={'red'}
          display={'inline'}
        >
          &nbsp;Discord Server
        </Text>
      </Text>
    </>
  )
}
