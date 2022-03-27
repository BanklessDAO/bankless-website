import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function DegenProjectComponent() {
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
              'https://s3-alpha-sig.figma.com/img/697d/b5ae/8059b13ab806b41d1d775d09800de994?Expires=1649030400&Signature=CUAajzo8~TeA94AppLyuizrE-rDCsbcQW7b6wpKOdGcpCsWS6FXZoVSjjFUDkpy2JeMGRk7RTGWY32~1bXrLsDzapTY8HU8SekpQYX80hNtvxAJso9W5XtZxH9Q6uC1SK9hTZPTqPe5-1jutN7NmFT9D~wkQzEAVXvhNPEBqW-z-izkWCs4SiH3jtg-hIkRXwNtUez9mcYQ0YuU-BMo8X03W7pR2XsbEZgWGJ4NLvBGOHfrBSbSUl5htMgTdTv6ukdtfJ-i01JoZAwk~uSAi~wgjAN~UYogunt~7-IEIaafTgBgpmHqi4n24UUbRMZcHJdQ9MIjOshi6zngBcfUfaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          DEGEN PROJECT
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          This workgroup is building the DEGEN and Mad Hatter
          Discord-integration bots to automate administrative tasks and ease
          operations across bDAO. The DEGEN bot is already deployed in dozens of
          Discord servers across the Web3 space.
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
