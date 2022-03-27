import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function PodcastHatcheryComponent() {
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
              'https://s3-alpha-sig.figma.com/img/01fa/079b/ac123ea8d337e7c5488d6c5603e3b9b3?Expires=1649030400&Signature=Po2c-F8DQUy~q2Ns2SO5ChzS6sV8IVM4yyJ-IH-x~4oIChLHovP2j27L4KcnomCLE5QKnHw9s2KFhnA10WdJU41rSXeeKD8COidkTVLBCkuNucQaTrUEwgS21MIj71L67rirt4tiVaOoDLKr29GeOpFgxsdzq2XaZcvCoGxcqXhJRrd8Pyz28NJ1h9Dqf~~ZmbRTWv2DflmMgKZp~aIQgUEfDR7sZtXOhvyNVadgg8Kv0wsFJsJhYOoJuNStKAo8LFHWd-qLR6c6GYtuXSKV1KcTKpMZI69xsYBGBHkPHpQv-bEhSVPy0RIuob5waUNrCnuNoNuNfaMIlHMuJfGxAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          PODCAST HATCHERY
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          Podcast Hatchery empowers individual creators to develop their own
          podcasts, improve their production skills, grow an audience and
          ultimately generate high-quality audio storytelling that will
          represent the mission, ethos, and diversity of BanklessDAO.
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
