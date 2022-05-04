import { Box, Text, Stack, Flex, Image, Heading, Link } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function DegenProjectComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row-reverse' }}>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <Box
          position={'relative'}
          rounded={'1xl'}
          boxShadow={'2xl'}
          width={'full'}
          overflow={'hidden'}>
          <Image
            alt={'Degen Logo'}
            fit={'cover'}
            align={'center'}
            w={'65%'}
            h={'65%'}
            src={'/images/DEGEN-logo_250.png'}
          />
        </Box>
      </Flex>

      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          color={'gray.100'}
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '1xl', sm: '2xl', md: '4xl' }}>
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
          spacing={'12px'}>
          {/* TODO review link */}
          <Link
            href='https://bankless.notion.site/DEGEN-f5e1c8e3e9b546ce83025a8359f98da8'
            isExternal>
            <Flex align={'center'} color={'white.100'}>
              Learn More <FiArrowUpRight />
            </Flex>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}
