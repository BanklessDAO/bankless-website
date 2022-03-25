import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function NewsletterProjectComponent() {
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
            fit={'contain'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={
              'https://s3-alpha-sig.figma.com/img/52eb/d2ec/4016fb2f8d813f6faf66d8046d229f81?Expires=1649030400&Signature=AvjH4xOM8UG1wSNLpl-oe4FgetSb7Uicn4w8LZIwR42Zoex2Na8xY4cXJ38AJoLXdJdHjYpaaPwsjPnHo4-PhN8g6jPvV5S0keLPhA3CKUmgezutq9LnTmbu~gi5hyV0BHt9FW7NkgB76Y8MG1PVola7bUTbx5bGIjw2WFvLnMZ-yyM69lHKhzVxcNQcU3uhkcuf5ZA6qXpGv4V1yt3QmU3sGLnyJC74eVDTyVh8zUWbvY2WvyPhaf5UKo4xxM9SkzPRgFzNf-AEm6VBOwiGCMoQSO8wUjDJEwD79toQqL6TvlC5DW-DwrALisjv8ELgPwDp6X06xUYtMRxJ2HDoSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          NEWSLETTER PROJECT
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          The Newsletter project provides a written voice for the Bankless
          movement through four newsletters that each have tens of thousands of
          subscribers: Weekly Rollup, State of the DAOs, Decentralized Art and
          Gearing Up.
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
