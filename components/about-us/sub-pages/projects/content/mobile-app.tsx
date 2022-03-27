import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function MobileAppComponent() {
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
              'https://s3-alpha-sig.figma.com/img/aeec/02d4/ba73982017048a0ddfdfb94b478ce331?Expires=1649030400&Signature=gIHNMbFZb7Wjugq8E~xw-QB3Kb~6DAMFD0jAkuR8lRZwAvvZGYaMUHq5TUhF9Z2itjYzZY7~xMHPiBxcdKSyidzYYhBsq-aQQMI9Rs50b98teXJUaIwe6eRR2N2Vu37Gb27~CuXbhiaQcYNNtlAPQThB6rIRbCU87vy9kEbo1-NJJ9fO-wwg8w0CmiGHAGQ0~fwseWMU~eO9ymZzu4JhNXNfRixad2ULjrBqqRkqofpRPk3tpXdzfUbW1FD-sKJ9L7bR142xkb04-xjB4fdsc~sz-l7SqIjbltRdshHtLmE9kR-3Ty-chrEMk2rjrVGLiakHQA-L~oQSwND5n3sWuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          MOBILE APP
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          The Mobile App project aims to build a mobile application for all
          things bDAO.
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
