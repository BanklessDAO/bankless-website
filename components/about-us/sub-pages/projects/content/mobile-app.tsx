import { Box, Text, Stack, Flex, Image, Heading, Link } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function MobileAppComponent() {
  return (
    <Stack
      align={'center'}
      width={{ md: '750px', lg: '800px', xl: '1000px' }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row-reverse' }}
    >
      <Flex
        flex={1}
        justify={'flex-end'}
        alignItems={'center'}
        position={'relative'}
        w={'full'}
      >
        <Box
          position={'relative'}
          height={{ base: '300px', sm: '350px' }}
          width={{ base: '300px', sm: '350px' }}
          boxShadow={'2xl'}
          overflow={'hidden'}
        >
          <Image
            alt={'Degen project image'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={'/images/Mobile app 1.png'}
          />
        </Box>
      </Flex>

      <Stack flex={1} spacing={{ base: 5, md: 4 }}>
        <Heading
          color={'gray.100'}
          fontWeight={700}
          mt={{ base: '32px', md: '0' }}
          fontSize={{ base: '20px' }}
        >
          MOBILE APP
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
          The Mobile App project aims to build a mobile application for all
          things bDAO.
        </Text>
        <Stack
          direction={{ base: 'row', md: 'row' }}
          as={'form'}
          spacing={'12px'}
        >
          <Link
            href='https://www.notion.so/Bankless-Mobile-App-8c7c4a36130e49a286d6267b970b38d7'
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
    </Stack>
  )
}
