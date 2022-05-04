import React from 'react'
import Image from 'next/image'
import {
  Flex,
  Box,
  Text,
  Button,
  VStack
} from '@chakra-ui/react';

class PodcastHatchery extends React.Component {
  render() {
    return (
      <Flex
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        justifyContent='center'
        alignItems='center'
        >
        <VStack 
          maxWidth='600px'
          justifyContent='start'
          alignItems='start'
          rowGap={6}>
          <Text fontWeight={700} fontSize='4xl'>
            The Podcast Hatchery
          </Text>
          <Text>
            Incubates audio storytelling projects. The team helps new podcasters find their audience,
            build their unique storytelling identity, and explore Web3 through interviews with
            thought-leaders in the space.
          </Text>
          <Button onClick={() => window.open('https://open.spotify.com/show/1jLNOoJv77K733rZzL4c6b')}>
            Podcast Hatchery
          </Button>
          <Text maxWidth='350px' fontSize='lg' color='grey'>
            Check out these shows produced and
            hosted by members of BanklessDAO:
          </Text>
        </VStack>
        <Box>
          <Image src="/listen/podcast-hatchery.png"
            alt="podcast-hatchery"
            height={450}
            width={450} />
        </Box>

      </Flex>
    )
  }
}

export default PodcastHatchery;