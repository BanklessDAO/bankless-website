import { Box, Text, Stack, Flex, Image, Heading, Link } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ContentGatewayComponent() {
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
            src='/images/Rectangle 237.png'
          />
        </Box>
      </Flex>

      <Stack
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
          CONTENT GATEWAY
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
          textAlign='justify'
          fontSize={{ base: '16px', sm: '20px' }}
        >
          Content Gateway aims to build a web service layer that enables content
          aggregation and provides all the DAO products with a single DAO
          Gateway API.
        </Text>
        <Stack
          direction={{ base: 'row', md: 'row' }}
          as={'form'}
          spacing={'12px'}
        >
          <Link
            href='https://bankless.notion.site/Content-Gateway-2436c434dc954e05af3ffbe5738ca902'
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
