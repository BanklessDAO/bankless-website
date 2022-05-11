import { Stack, Flex, Box, Heading, Text, Image } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'
import TokenImg from '../../../../assets/banklesscoin.png'
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
            fontSize={{ base: '5xl', lg: '5xl' }}
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
          <Text
            color={'white.100'}
            fontSize={{ base: '2xl', md: 'xl' }}
            fontWeight='bold'
          >
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
              fontSize={{ base: '3xl', md: 'md' }}
              fontWeight={'bold'}
              as='u'
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
            width={'full'}
            overflow={'hidden'}
            display={'flex'}
            justifyContent={'center'}
          >
            <Image alt={'Hero Image'} src={TokenImg.src} minW='15rem' />
          </Box>
        </Flex>
      </Stack>

      <Text
        mt='2rem'
        textAlign={'center'}
        fontSize={{ base: '1.5rem', md: 'xl' }}
      >
        Join the
        <Text
          fontSize={{ base: '1.5rem', md: 'xl' }}
          color={'red'}
          display={'inline'}
        >
          &nbsp;Discord Server
        </Text>
      </Text>
    </>
  )
}
