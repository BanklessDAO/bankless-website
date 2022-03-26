import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function BanklessLoansComponent() {
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
              'https://s3-alpha-sig.figma.com/img/26f9/c82e/b0181596a85cb3dcbdae9768b7422a79?Expires=1649030400&Signature=GPnsoc8aDerkZOVyvJFh60kQuhaNX0OLikmZsVMFCcNxWuSvMe1pBT8ZFa8iXwd5m~iJeOduftV1H5sm7YSf7OKmkKfHTsuKgSgNF-brrgrXyXEaMNKPEaI5ic1YtNmFYp6ekrAo5E4BbDQTY58hU2UMW2E1NdzavLOjS6P5MRqsoKCzBehlxLNNe--2qTM-0xc-Ena4iIE7xb9xg63XHeNYVK1pRDiS3lMl52mSe0fBiApsWw0ZRd2TdWBy3t8suH-ENEfMZ0fbeSSvfzG3FdT1K5zokAfVaBEeWz0YfaPA5d1pgktLG31hYD2nlBQeSwNYIslfbg3jsHl6SRX0RQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          BANKLESS LOANS
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          The Bankless Loans Project Team is building a DeFi application for
          BanklessDAO that supports its goal of onboarding one billion people to
          crypto while generating revenue for the bDAO treasury.
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
