import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function EditArmProjectComponent() {
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
              'https://s3-alpha-sig.figma.com/img/bb00/09e0/5c9af7754edea2751d3c304c26f4f248?Expires=1649030400&Signature=geQgCIaCGmwnOsEshWTJSb~DP6PPPjD2cqlsI31LrjD~QQfsv94rB-jQYw3bMvMbecUV6pozOLWgFF-hMSqu29JH4smUJMajZ0y97yIP97xmDflRYnqF8w-nqL6Reh59ba97fvSCos0J5fwNMrS8hrX7aatpUu8MqYeiQCyPHDTAR1UYiLrnFj~adf3UR99w7FIn9gpx6d~PXT7xm6hoG-6siMZ4KtKm6WMeG8quiEytCpWoP2p6zhXrCNuuHcBj4Xfkp9IrdCtMFSv4kE2Wv3VE8~U8QF92lLP6O7ANHzrLLbX84LoTjZqcbeyV02WS-p4abM7o9mvk0cJo1HJasQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          EDITING AND PUBLISHING ARM OF EPA
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          The EPA is the center for longform writing in BanklessDAO. The skilled
          editors and writers in this group ship multiple pieces per week. Any
          writer can submit to the EPA and get paid in crypto. Read their
          stories on Medium and Mirror.
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
