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
      <>
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          columnGap={8}
          rowGap={8}
          zIndex={'docked'}
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
                fontSize={{ base: '1.4rem', sm: '3xl', xl: '4xl' }}
                textTransform={'uppercase'}
              >
                Crypto Sapiens
              </Text>
              <Text
                fontFamily={'clear sans'}
                fontSize={{ base: 'sm', md: 'xl' }}
              >
                Hosted By{' '}
                <Link
                  color='red.600'
                  textDecoration='none'
                  href='https://twitter.com/humptycalderon'
                  target="_blank"
                >
                  Humpty
                </Link>
              </Text>
              <Text fontSize='md' fontFamily={'clear sans'} color='grey'>
                Crypto Sapiens hosts discussions with innovative Web3 builders
                to help everyone learn about decentralized money systems
                including Ethereum, Bitcoin, and DeFi. It empowers people with
                information to better understand the complex crypto ecosystem
                and go from crypto curious to crypto natives.
              </Text>
              <UnorderedList width='95%' color='white' textAlign='start'>
                <ListItem>
                  Listen on{' '}
                  <Link
                    color='red.600'
                    textDecoration='none'
                    href='https://open.spotify.com/show/3yS1Y61r0XkogChx12JQ2q'
                    target="_blank"
                  >
                    Spotify
                  </Link>{' '}
                  and{' '}
                  <Link
                    color='red.600'
                    textDecoration='none'
                    href='https://podcasts.apple.com/us/podcast/crypto-sapiens/id1588346317'
                    target="_blank"
                  >
                    Apple Podcasts
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    color='red.600'
                    textDecoration='none'
                    href='https://gitcoin.co/grants/5187/crypto-sapiens-podcast-gitcoin-grants-proposal'
                    target="_blank"
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
                    target="_blank"
                  >
                    Twitter
                  </Link>{' '}
                  and{' '}
                  <Link
                    color='red.600'
                    textDecoration='none'
                    href='https://www.instagram.com/cryptosapiensofficial/'
                    target="_blank"
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
                fontSize={{ base: '1.4rem', sm: '3xl', xl: '4xl' }}
              >
                Making Bank
              </Text>
              <Text
                fontFamily={'clear sans'}
                fontSize={{ base: 'sm', md: 'xl' }}
                width={{ base: '90%', md: '80%' }}
                textAlign={'center'}
              >
                Organized by{' '}
                <Link
                  color='red.600'
                  textDecoration='none'
                  href='https://twitter.com/crypto_soundman'
                  target="_blank"
                >
                  Soundman
                </Link>{' '}
                and hosted by members of the BanklessDAO community
              </Text>
              <Text fontSize='md' fontFamily={'clear sans'} color='grey'>
                Making Bank is a podcast made by BanklessDAO for BanklessDAO members
                and like-minded Web3 pioneers. It offers an inside look into bDAO and
                showcases the people, ideas, and projects that keep it at the forefront
                of Web3 and DAOs.
              </Text>
              <UnorderedList width='95%' color='white' textAlign='start'>
                <ListItem>
                  Listen on{' '}
                  <Link
                    color='red.600'
                    textDecoration='none'
                    href='https://open.spotify.com/show/1jLNOoJv77K733rZzL4c6b'
                    target="_blank"
                  >
                    Spotify
                  </Link>,{' '}
                  <Link
                    color='red.600'
                    textDecoration='none'
                    href='https://podcasts.apple.com/us/podcast/making-bank-a-banklessdao-podcast/id1610031915'
                    target="_blank"
                  >
                    Apple Podcasts
                  </Link>
                  {' '}and{' '}
                  <Link
                    color='red.600'
                    textDecoration='none'
                    href='https://rss.com/podcasts/making-bank-banklessdao/'
                    target="_blank"
                  >
                    RSS
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

        <Box
          position='absolute'
          top={{ base: '50rem', md: '40rem', lg: '50rem' }}
          left={{ base: '0', sm: '0', md: '20%' }}
          bgGradient='linear(to-br, rgba(255, 16, 19, 0.5) 16.9%, rgba(140, 29, 207, 0.1) 70%)'
          filter='auto'
          blur='90px'
          h={{ base: '30rem', sm: '50rem' }}
          w={{ base: '60%', lg: '50rem' }}
          borderRadius='full'
        />
      </>
    )
  }
}

export default Podcasts
