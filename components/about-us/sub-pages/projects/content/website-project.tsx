import { Box, Text, Stack, Flex, Image, Heading, Link } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function WebsiteProjectComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <Box
          position={'relative'}
          height={'300px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          width={'full'}
          overflow={'hidden'}>
          <Image
            alt={'Photo by Ben Kolde on Unsplash'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={'/images/website.jpg'}
          />
        </Box>
      </Flex>

      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          color={'gray.100'}
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '1xl', sm: '2xl', md: '4xl' }}>
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
          spacing={'12px'}>
          <Link
            href='https://www.notion.so/bankless/bDAO-Website-1320df854ac54cb3a65018173b9e5445'
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
