import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function DaoPunksComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}
      mt={'4rem'}
    >
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}
        display={{ base: 'none', md: 'flex' }}
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
              'https://s3-alpha-sig.figma.com/img/4774/d8b2/195826b329e8056306635c8dcf537224?Expires=1649030400&Signature=WVDyJstJNhBUccWHe24C7124lxg2x-yEL7Bl0Sq-BQANpqOGzJsneDYECifyejz6LVxzEy7KNje-04h9Z5DAPTW08UQXMNN7A7mYP6aKXJvSIMclGxdnUHNmC1KB7hRFBq-LmuvL0a-y1fyFAWXD1WvLcI3egAPpPeWrSmemvvZOmJrxkw~O7GsQ4wxt7unPriY2oUD~az3ANrwhgQMn0ToS3ut6S~z4G1MHjREqg-bLIfN5nqdkQfPNYG1tOXKILopv32HRk8RVj48REbKuKkamHbU40XNaVbXDhLgJj~r1zVZeK8X4iOFB4YnEjY6tQ5mKmpOH2lvyuiPzNxP2mA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            }
          />
        </Box>
      </Flex>

      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          color={'gray.100'}
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          textTransform={'uppercase'}
        >
          dao punks
        </Heading>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
          display={{ base: 'flex', md: 'none' }}
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
                'https://s3-alpha-sig.figma.com/img/4774/d8b2/195826b329e8056306635c8dcf537224?Expires=1649030400&Signature=WVDyJstJNhBUccWHe24C7124lxg2x-yEL7Bl0Sq-BQANpqOGzJsneDYECifyejz6LVxzEy7KNje-04h9Z5DAPTW08UQXMNN7A7mYP6aKXJvSIMclGxdnUHNmC1KB7hRFBq-LmuvL0a-y1fyFAWXD1WvLcI3egAPpPeWrSmemvvZOmJrxkw~O7GsQ4wxt7unPriY2oUD~az3ANrwhgQMn0ToS3ut6S~z4G1MHjREqg-bLIfN5nqdkQfPNYG1tOXKILopv32HRk8RVj48REbKuKkamHbU40XNaVbXDhLgJj~r1zVZeK8X4iOFB4YnEjY6tQ5mKmpOH2lvyuiPzNxP2mA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              }
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
          spacing={'12px'}
        >
          <Link href={'/#'} passHref={true}>
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
