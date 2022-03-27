import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function DaoHeatComponent() {
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
              'https://s3-alpha-sig.figma.com/img/8b85/3160/48209ad2872a5a9412b7db21415e14a8?Expires=1649030400&Signature=g-BzmH7zLHRGHT-5AyVYsDZLsUTHxqTetVJfUwtIE5EDV5c9kC5K2-cWDCr0bBWwILWh0RBUQlIQWMkEE~cGhV~ksaPrdRxNEJWpD2rMTd6I~cFuKyvzOEIj3N82JHoxcG3TqXuzWuzXKvhXLQY38lgUUYO719SXUMH9KKl5mTWtidEVLIuK3nOqVC61WO055sIHLtSAf9BJN2cKmxYAXKc~hYEyN6fYJC2GroAO3dDB4a62CjKNUjaZUMB~HgbzQ0aP4JiMRUyURCIhPvGcZA~-MouaMkcscivZwzhTa9iKMk2IROimmfYx8gmbfOJ0HG3yn8FFOce~i27CAGZOzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          DAO HEAT
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          DAO Heat is a collaborative contest that features the hottest writing
          and designs. The contest involves two stages, the writing and the
          design contest. The winning design is converted into a set of limited
          edition NFTs and sold.
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
