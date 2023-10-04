import { Box, Text, Stack, Flex, Image, Heading, Link } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ProjectBountyBoardComponent() {
  return (
    <Stack
      justify='space-between'
      align={'center'}
      width={{ md: '750px', lg: '800px', xl: '1000px' }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex
        flex={1}
        justify={'flex-start'}
        alignItems={'center'}
        position={'relative'}
        w={'full'}
      >
        <Box
          background={'#D02128'}
          position={'relative'}
          height={{ base: '300px', sm: '350px' }}
          width={{ base: '300px', sm: '350px' }}
          boxShadow={'2xl'}
          overflow={'hidden'}
        >
          <Image
            alt={'Bankless logo'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src='/images/bountyBoard.png'
          />
        </Box>
      </Flex>

      <Stack
        zIndex={99}
        width={{ base: '300px', sm: '350px', xl: '500px' }}
        spacing={{ base: 5, md: 4 }}
      >
        <Heading
          color={'gray.100'}
          width={{ base: '300px', sm: '350px', xl: '500px' }}
          fontWeight={700}
          mt={{ base: '32px', md: '0' }}
          fontSize={{ base: '20px' }}
        >
          BOUNTY BOARD
        </Heading>
        <Text
          color={'gray.100'}
          width={{ base: '300px', sm: '350px', xl: '500px' }}
          lineHeight={{
            base: '20px',
            sm: '27px',
            md: '30px',
            lg: '30px',
            xl: '45px',
          }}
          fontSize={{ base: '16px', sm: '20px' }}
        >
          The Bounty Board creates an efficient mechanism of coordination
          between organizers and contributors. It provides a way to quickly
          access Web3 talent within the DAO for bountied work.
        </Text>
        <Stack
          direction={{ base: 'row', md: 'row' }}
          as={'form'}
          spacing={'12px'}
        >
          <Link
            href='https://bankless.notion.site/Bounty-Board-Project-Page-318dc164cc5640cca17e0fb5f484fd90'
            isExternal
          >
            <Flex
              align={'center'}
              color={'white.100'}
              fontSize='20px'
              lineHeight={'24px'}
              fontWeight='700'
            >
              Learn More <FiArrowUpRight />
            </Flex>
            <Box height={'1px'} width='100%' bgColor={'#999999'} mt='6px' />
          </Link>
        </Stack>
      </Stack>
      {/* bottom gradient circle */}
      <Box
        position='absolute'
        top={{ md: '80rem' }}
        right={{ md: '0%', lg: '10%', xl: '20%' }}
        display={{ base: 'none', md: 'block' }}
        bgGradient='linear(to-br, rgba(255, 16, 19, 0.3) 16.9%, rgba(140, 29, 207, 0.1) 88.02%)'
        filter='auto'
        blur='100px'
        h='25rem'
        w={{ base: '70%', lg: '30rem' }}
        borderRadius='full'
      ></Box>
    </Stack>
  )
}
