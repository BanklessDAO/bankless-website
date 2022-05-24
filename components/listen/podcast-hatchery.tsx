import React from 'react'
import Image from 'next/image'
import { Flex, Box, Text, Button, VStack } from '@chakra-ui/react'
import { HiArrowNarrowRight } from 'react-icons/hi'

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
          mb='4rem'
          justifyContent='start'
          alignItems='start'
          rowGap={6}
        >
          <Text
            fontWeight={700}
            fontFamily={'clear sans'}
            fontSize={{ base: '1.4rem', sm: '2rem', lg: '3rem' }}
          >
            The Podcast Hatchery
          </Text>
          <Text
            fontFamily={'clear sans'}
            fontSize={{ base: '12px', md: '1rem', lg: '1.7rem' }}
            width={{ md: '25rem', lg: '32rem' }}
          >
            Incubates audio storytelling projects. The team helps new podcasters
            find their audience, build their unique storytelling identity, and
            explore Web3 through interviews with thought-leaders in the space.
          </Text>
          <Button
            onClick={() =>
              window.open(
                'https://open.spotify.com/show/1jLNOoJv77K733rZzL4c6b'
              )
            }
            h={{ base: '4rem', md: '3rem', lg: '4rem' }}
            w={{ base: '16rem', md: '12rem ', lg: '16rem' }}
            rounded='md'
            display={'flex'}
            alignItems='center'
          >
            <Text
              mt={{ base: '-5px', lg: '-8px' }}
              mr='5px'
              fontFamily={'clear sans'}
              fontSize={{ base: '1.3rem', md: '0.9rem', lg: '1.3rem' }}
            >
              Podcast Hatchery
            </Text>
            <HiArrowNarrowRight size={'1.8rem'} />
          </Button>
          <Text
            width={{ base: '13rem', md: '20rem', lg: '350px' }}
            fontSize={{ base: '12px', md: '1rem', lg: '1.2rem' }}
            fontFamily={'clear sans'}
            color='grey'
          >
            Check out these shows produced and hosted by members of BanklessDAO:
          </Text>
        </VStack>
        <Box
          mt={{ base: '-1rem', md: '-5rem', lg: '0' }}
          ml={{ base: '-3rem', md: '0' }}
          mb={{ base: '5rem', md: '0' }}
          height={{ base: '16rem', md: '15rem', lg: '30rem' }}
          width={{ base: '16rem', md: '15rem', lg: '25rem' }}
        >
          <Image
            src='/listen/podcast-hatchery.png'
            alt='podcast-hatchery'
            height={500}
            width={500}
          />
        </Box>
      </Flex>
    )
  }
}

export default PodcastHatchery
