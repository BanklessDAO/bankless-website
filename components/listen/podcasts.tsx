import React from 'react'
import Image from 'next/image'
import {
  Flex,
  Box,
  Text,
  Link,
  VStack,
  UnorderedList,
  ListItem,
  Grid,
} from '@chakra-ui/react'

class Podcasts extends React.Component {
  render() {
    return (
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        columnGap={8}
        rowGap={8}
      >
        <VStack
          maxWidth='500px'
          background='transparent'
          borderTopLeftRadius={32}
          borderTopRightRadius={32}
        >
          <VStack
            padding={6}
            width='100%'
            background='#191919'
            borderTopLeftRadius={24}
            borderTopRightRadius={24}
            minHeight='380px'
          >
            <Text
              fontFamily={'clear sans'}
              fontWeight={700}
              fontSize={{ base: '2xl', sm: '3xl', xl: '4xl' }}
              textTransform={'uppercase'}
            >
              Crypto Sapiens
            </Text>
            <Text fontFamily={'clear sans'} fontSize={{ base: 'md', md: 'xl' }}>
              Hosted By{' '}
              <Link
                color='red.600'
                textDecoration='none'
                href='https://twitter.com/humptycalderon'
              >
                Humpty
              </Link>
            </Text>
            <Text fontSize='md' fontFamily={'clear sans'} color='grey'>
              Crypto Sapiens hosts discussions with innovative Web3 builders to
              help everyone learn about decentralized money systems including
              Ethereum, Bitcoin, and DeFi. It empowers people with information
              to better understand the complex crypto ecosystem and go from
              crypto curious to crypto natives.
            </Text>
            <UnorderedList width='95%' color='white' textAlign='start'>
              <ListItem>
                Listen on{' '}
                <Link
                  color='red.600'
                  textDecoration='none'
                  href='https://open.spotify.com/show/3yS1Y61r0XkogChx12JQ2q'
                >
                  Spotify
                </Link>{' '}
                and{' '}
                <Link
                  color='red.600'
                  textDecoration='none'
                  href='https://podcasts.apple.com/us/podcast/crypto-sapiens/id1588346317'
                >
                  Apple Podcasts
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  color='red.600'
                  textDecoration='none'
                  href='https://gitcoin.co/grants/5187/crypto-sapiens-podcast-gitcoin-grants-proposal'
                >
                  Sponsor the Show
                </Link>
              </ListItem>
              <ListItem>
                Follow on{' '}
                <Link
                  color='red.600'
                  textDecoration='none'
                  href='https://mobile.twitter.com/cryptosapiens_'
                >
                  Twitter
                </Link>{' '}
                and{' '}
                <Link
                  color='red.600'
                  textDecoration='none'
                  href='https://www.instagram.com/cryptosapiensofficial/'
                >
                  Instagram
                </Link>
              </ListItem>
            </UnorderedList>
          </VStack>
          <VStack
            width='100%'
            padding={6}
            background='#191919'
            borderBottomLeftRadius={'50%'}
            borderBottomRightRadius={'50%'}
            marginTop='0px !important'
          >
            <Box>
              <Image
                src='/listen/crypto-sapiens.png'
                alt='crypto-sapiens'
                height={440}
                width={440}
              />
            </Box>
          </VStack>
        </VStack>

        <VStack
          maxWidth='500px'
          background='transparent'
          borderTopLeftRadius={32}
          borderTopRightRadius={32}
        >
          <VStack
            padding={6}
            width='100%'
            background='#191919'
            borderTopLeftRadius={24}
            borderTopRightRadius={24}
            minHeight='380px'
          >
            <Text
              fontFamily={'clear sans'}
              fontWeight={700}
              fontSize={{ base: '2xl', sm: '3xl', xl: '4xl' }}
            >
              Making Bank
            </Text>
            <Text
              fontFamily={'clear sans'}
              fontSize={{ base: 'md', md: 'xl' }}
              width={{ base: '90%', md: '80%' }}
              my={'2rem'}
              textAlign={'center'}
            >
              Organized by{' '}
              <Link
                color='red.600'
                textDecoration='none'
                href='https://twitter.com/crypto_soundman'
              >
                Soundman
              </Link>{' '}
              and hosted by members of the BanklessDAO community
            </Text>
            <Text fontSize='md' fontFamily={'clear sans'} color='grey'>
              This show is focused primarily on highlighting various BanklessDAO
              members. Soundman helps give bDAO contributors a voice beyond
              their avatar by getting to know them on a more personal level and
              what they are doing in the Web3 space as a whole.
            </Text>
            <UnorderedList width='95%' color='white' textAlign='start'>
              <ListItem>
                Listen on{' '}
                <Link
                  color='red.600'
                  textDecoration='none'
                  href='https://www.podbean.com/podcast-detail/pnwdu-202cc2/Making-%24BANK-Podcast'
                >
                  BanklessDAO’s Podbean
                </Link>
              </ListItem>
            </UnorderedList>
          </VStack>
          <VStack
            width='100%'
            padding={6}
            background='#191919'
            borderBottomLeftRadius={'50%'}
            borderBottomRightRadius={'50%'}
            marginTop='0px !important'
          >
            <Box>
              <Image
                src='/listen/making-bank.png'
                alt='making-bank'
                height={440}
                width={440}
              />
            </Box>
          </VStack>
        </VStack>
      </Grid>
    )
  }
}

export default Podcasts
