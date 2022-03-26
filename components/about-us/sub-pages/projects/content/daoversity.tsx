import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function DaoversityComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}
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
              'https://s3-alpha-sig.figma.com/img/6908/fd14/07b5497d6d6246dfd5e4e8b265a64083?Expires=1649030400&Signature=CkdWE4hzvhNFGgkSXxpWM8sskG4Tml7V9tSgSOseSU8RPKeHRyh0ROFolAhE9DyelhjgTqy6~RmXsrSv9euErSQ2SyP-UCSQK9mbDiVLxlXv~LMx1KlJeQWlZm3id5SGbpY9YRAsLrays6-OXtdhHE578JC04IbzDMOpq89S3jezW7zLpecqRxyCLhyxhlXwVK0PYH4ImV8cZ-kuFLjm9fgWSOV0piOEHO4O21lkVVqQuUT8eR4OmVC0697xxap2w-zvY0k4b7jWuW309nMtbsfISddOzaFt9x28ZceoHZ56lGCOMp8yBycSdAhikdDr6AneH-GBQqa-sX1GAO0PjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          DAOVERSITY
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          DAOversity aims to understand and improve diversity within
          BanklessDAO. It works to provide a safe and inclusive space for
          discussing and addressing the challenges minority groups face in DAOs
          and Web3.
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
