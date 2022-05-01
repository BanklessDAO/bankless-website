import React from 'react'
import { Box, Text, VStack, Link } from '@chakra-ui/react'

class PodcastIdea extends React.Component {
  render() {
    return (
      <Box>
        <VStack maxW={700} alignItems='start'>
          <Text
            fontWeight={700}
            fontSize={{ base: '4xl', md: '5xl' }}
            maxW={450}
          >
            Have your own podcast Idea?
          </Text>
          <Text fontSize='2xl'>
            Join{' '}
            <Link color='red.600' textDecoration='none' href='https://discord.com/invite/bankless'>
              BanklessDAO
            </Link>{' '}
            and get in contact with the Podcast Hatchery.
          </Text>
        </VStack>
      </Box>
    )
  }
}

export default PodcastIdea
