import React from 'react'
import { Box, Text, VStack, Link } from '@chakra-ui/react'

class PodcastIdea extends React.Component {
  render() {
    return (
      <Box>
        <VStack mt='4rem' maxW={700} alignItems='start'>
          <Text
            fontWeight={700}
            fontSize={{ base: '2xl', md: '6xl' }}
            maxW={450}
          >
            Have your own podcast Idea?
          </Text>

          <Text
            width={{ base: '18rem', md: '100%' }}
            fontSize={{ base: 'md', md: '3xl' }}
          >
            Join{' '}
            <Link
              color='red.600'
              textDecoration='none'
              href='https://discord.com/invite/bankless'
            >
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
