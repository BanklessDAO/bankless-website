import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function BanklessAcademyComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row-reverse' }}
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
              'https://s3-alpha-sig.figma.com/img/46f9/f7c0/5d2af637dbf26d4d26df1cc5eb27a9d3?Expires=1649030400&Signature=Em2oo4v2r3cJqT8rFeZPDm4Pre47vK1sldAgJ0RCoiOgNuOMKMi-8m02HtsNpAFJvDkiQVabs32rU5eyt0KzJC0ckdfspBf0L6UljAkVYBQ6-OMMqQ8qytBVTH7BxPS-z0HYaKtXJhDPY7inRcQOy04ZFQL3Xe~vqkKBenFb0dOgzIXA2gRG5wMtWGUO06GRMCWz1iTLSEQIUyasuQWVOzdw7MBJgO~WQCbBO5QRDDLA4ByQRbkkVw7bKPyQE87kGHH3okbxIjIYSJrXWbPsdLn-R5YvRbmI-o73md7mFBinNodAl5HguKTUXmzjoCMD94E~z-SQ874e4K1O22rI0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          BANKLESS ACADEMY
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          Bankless Academy is an app that will take someone with zero knowledge
          of crypto and smart contracts and lead them down the journey of
          becoming a competent crypto user. They provide lessons in interactive
          formats and have fun rewards along the way.
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
