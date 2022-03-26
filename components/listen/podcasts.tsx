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
  Grid

} from '@chakra-ui/react';

class Podcasts extends React.Component {
  render() {
    return (
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr'}}
        columnGap={8}
        rowGap={8}
      >
        <VStack
          maxWidth='500px'
          background='#191919'
          padding={6}
          rowGap={4}
          borderTopLeftRadius={32}
          borderTopRightRadius={32}
          borderBottomLeftRadius={'100%'}
          borderBottomRightRadius={'100%'}
          >
          <Text fontWeight={700} fontSize='4xl'>
            Crypto Sapiens
          </Text>
          <Text fontWeight={700} fontSize='xl'>
            Hosted By <Link fontSize='2xl' color='red.600' textDecoration='none'>Humpty</Link>
          </Text>
          <Text fontSize='md' color='grey'>
            Crypto Sapiens hosts discussions with innovative Web3 builders to help everyone learn about decentralized money systems
            including Ethereum, Bitcoin, and DeFi. It empowers people with information to better understand the complex crypto ecosystem
            and go from crypto curious to crypto natives.
          </Text>
          <UnorderedList width='95%' color='white' textAlign='start'>
            <ListItem>Listen on <Link color='red.600' textDecoration='none'>Spotify</Link> and <Link color='red.600' textDecoration='none'>Apple Podcasts</Link></ListItem>
            <ListItem><Link color='red.600' textDecoration='none'>Sponsor the Show</Link></ListItem>
            <ListItem>Follow on <Link color='red.600' textDecoration='none'>Twitter</Link> and <Link color='red.600' textDecoration='none'>Instagram</Link></ListItem>
          </UnorderedList>
          <Box>
            <Image src="/listen/crypto-sapiens.png"
              alt="crypto-sapiens"
              height={350}
              width={350} />
          </Box>
        </VStack>

        <VStack
          maxWidth='500px'
          background='#191919'
          padding={6}
          rowGap={4}
          borderTopLeftRadius={32}
          borderTopRightRadius={32}
          borderBottomLeftRadius={'100%'}
          borderBottomRightRadius={'100%'}
          >
          <Text fontWeight={700} fontSize='4xl'>
            Making Bank
          </Text>
          <Text fontWeight={700} fontSize='xl'>
          Organized by <Link fontSize='2xl' color='red.600' textDecoration='none'>Soundman</Link> and hosted by members of the BanklessDAO community
          </Text>
          <Text fontSize='md' color='grey'>
          This show is focused primarily on highlighting various BanklessDAO members. Soundman helps give bDAO contributors a voice 
          beyond their avatar by getting to know them on a more personal level and what they are doing in the Web3 space as a whole. 
          </Text>
          <UnorderedList width='95%' color='white' textAlign='start'>
            <ListItem>Listen on <Link color='red.600' textDecoration='none'>BanklessDAO’s Podbean</Link></ListItem>
          </UnorderedList>
          <Box>
            <Image src="/listen/making-bank.png"
              alt="making-bank"
              height={350}
              width={350} />
          </Box>
        </VStack>

      </Grid>
    )
  }
}

export default Podcasts;