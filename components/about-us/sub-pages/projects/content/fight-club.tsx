import { Box, Text, Stack, Flex, Image, Heading, Link } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function FightClubComponent() {
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
          height={'300px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          width={'full'}
          overflow={'hidden'}>
          <Image
            alt={'Photo by Ivan Pergasi on Unsplash'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={'/images/fight-club.jpg'}
          />
        </Box>
      </Flex>

      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          color={'gray.100'}
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '1xl', sm: '2xl', md: '4xl' }}>
          FIGHT CLUB
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          Fight Club aims to create opportunities for the bDAO community to pool
          capital, invest in projects, and share proceeds while offering venture
          investing education.
        </Text>
        <Stack
          direction={{ base: 'row', md: 'row' }}
          as={'form'}
          spacing={'12px'}>
          <Link href='https://twitter.com/fight_club_vc' isExternal>
            <Flex align={'center'} color={'white.100'}>
              Learn More <FiArrowUpRight />
            </Flex>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}
