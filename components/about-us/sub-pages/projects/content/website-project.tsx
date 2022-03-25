import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function WebsiteProjectComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}
      >
        <Box
          position={'relative'}
          height={'300px'}
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
              'https://s3-alpha-sig.figma.com/img/4b5f/b25a/30064034cda3f80e98d0cbdb50827535?Expires=1649030400&Signature=MnJZCG6zuAu2aEEhAIJ7kWUeUGegL83eZt9u1LPITYlXIkrGJV5-g996y5wji85JWEWQiI2DfBBCvGSw8Ha5jN63o4zycWu5s2WpXiMkEiu-ZThXwOW3Kq6HihuN1EvRk2nSJYT7gwb2Ac8fFGNk-6jMS4aib4N6OYc3TCiRq-c0yT21EokZvnZC74mckEu6wTrvp7Sg0EzbjBnHoWBRCzuigDwu-Zpw6yaokCPKfKWTSJABFvVs4JsYFJDMM4hukdyQDU6hiGGPp~afRkDcnvgw9Qf-vbGyhP30reGnTw7YEHpZhjzAIQ3wSAoxWIlWaPVmGJCIbdaHFrx4RxavUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            }
          />
        </Box>
      </Flex>

      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          color={'gray.100'}
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '1xl', sm: '2xl', md: '4xl' }}
        >
          WEBSITE PROJECT
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          The Website project aims to constantly improve the code, content, and
          design of the current bDAO website to streamline the introduction and
          onboarding of new members to the Bankless movement.
        </Text>
        <Stack
          direction={{ base: 'row', md: 'row' }}
          as={'form'}
          spacing={'12px'}
        >
          <Link href={'/#'} passHref={true}>
            <Flex align={'center'} color={'white.100'}>
              Learn More <FiArrowUpRight />
            </Flex>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}
