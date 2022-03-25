import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ProjectBanklessConsultingComponent() {
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
              'https://s3-alpha-sig.figma.com/img/111a/e31d/42fdd30e7f92e156d14b7d62e0336f0d?Expires=1649030400&Signature=Is-xuhemFoSnS8qfy~3FuWnJTa8L6nBW6mUYzuNqVVz4x1IMDs9~5nlP9vH~om3Tz5QjlEJPHGkxdd6qToW90srl28dsI8ji8tk~wEAVS7CEPExRCCaUlVwKkzQ5ttAibtWLsva-Yf1KSbHjQNYFaQmBANawRlWHOohGbUQ-DivGoWOQm6Fz9~8c64oJMWL1ydKHZa1JzamhKJOeH3NYfJs6HexoAWRN~1AamJy8FAUrOeXfmgbVR7KPtoYjMyXrL56OkL2-iCuuoR440ywqsKo5o8M1guEpNXouS94GJ-b9rioCqxVe44pXXNM2r4UCN7PgU~lmNzdUOBh1-nd0dg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          BANKLESS CONSULTING
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          Bankless Consulting is the consulting services arm of BanklessDAO. It
          connects over 15,000+ talented Web3 natives to professional services
          in marketing, tech, legal, finance, and management. Bankless
          Consulting helps decentralized, Web3-native, and traditional
          businesses leverage the power of Web3.
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
