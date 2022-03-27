import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ContentGatewayComponent() {
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
              'https://s3-alpha-sig.figma.com/img/685d/3530/6caebeb482f6b9d14a19a89f92d1710f?Expires=1649030400&Signature=L7Vd51SQiVhFdeB8lu8M-lBXiglOxeO6-fun6UbNfT-NANOYxc9exg2ydpyYdhlHAtNcuB6RSKQeI1kWEnrtFB2lWPdCurRYOmwH5~YBQes3YGv4CSGaOik2inaloCHp-AeV5xhmekVJ0eDf1h6BnSUdEA-DFoZ0~AfhM8B2Pd0oHVSPcscYeeUrZEgd8dVF7t3Hvk60xPNzBCw28~t0tNFkN3NHkz~j6H3-zNTytOv9TTS534XDgEbj6aVO33rNWsewRiBVvyvN4Mk5~GYADUXZznkrnLU3zXZctPapFljUH9GZr0uCh-waXMa1XW4rz5HsRjbMEFRDADgnxX7gIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          CONTENT GATEWAY
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          Content Gateway aims to build a web service layer that enables content
          aggregation and provides all the DAO products with a single DAO
          Gateway API.
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
