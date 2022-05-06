import { Box, Text, Stack, Flex, Image, Heading, Link } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function DaoPunksComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}
      mt={'4rem'}>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}
        display={{ base: 'none', md: 'flex' }}>
        <Box
          position={'relative'}
          height={'300px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          width={'full'}
          overflow={'hidden'}>
          <Image
            alt={'Hero Image'}
            fit={'cover'}
            align={'center'}
            w={'90%'}
            h={'90%'}
            src={'/images/DAO-Punk-Invest.png'}
          />
        </Box>
      </Flex>

      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          color={'gray.100'}
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          textTransform={'uppercase'}>
          dao punks
        </Heading>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
          display={{ base: 'flex', md: 'none' }}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'90%'}
              h={'90%'}
              src={'/images/DAO-Punk-Invest.png'}
            />
          </Box>
        </Flex>
        <Text color={'grey'} fontSize={{ sm: 'sm', md: 'md' }}>
          Is a node within the Bankless ecosystem that helps contributors
          transition to full-time DAO. DAOpunk NFTs designed by Crypto Bushi
          allow access to the Discord server. Join to connect with other punks
          making the journey to liberating, decentralized work.
        </Text>
        <Stack
          direction={{ base: 'row', md: 'row' }}
          as={'form'}
          spacing={'12px'}>
          <Link href='https://opensea.io/collection/daopunksnft' isExternal>
            <Flex align={'center'} color={'white.100'}>
              <Text mr={'0.5rem'} fontSize={{ sm: 'sm', md: 'md' }}>
                Invest in a DAOPunk NFT
              </Text>
              <FiArrowUpRight size={25} />
            </Flex>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}
