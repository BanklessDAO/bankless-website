import React from 'react'
import { Box, Text, VStack, Link } from '@chakra-ui/react'

class PodcastIdea extends React.Component {
  render() {
    return (
      <Box w={{ sm: '80%', md: '100%' }} position='relative'>
        <Box
          bgGradient='linear(to-b, rgba(245, 7, 7, 0.781) 3%, rgba(0, 0, 0, 0) 33%)'
          filter='auto'
          blur='5px'
          borderRadius={'50% 50% 0 0'}
          h={{ base: '10rem', md: '18rem' }}
          w={{ base: '150%', sm: '140%', md: '100%' }}
          position={'absolute'}
          top='0rem'
          left={{ base: '-20%', md: '0' }}
          opacity={'0.5'}
        ></Box>
        <VStack m='0 auto' mt='4rem' maxW={700} alignItems='start'>
          <Text
            fontWeight={700}
            fontSize={{ base: '2xl', md: '5xl' }}
            maxW={450}
          >
            Have your own podcast Idea?
          </Text>

          <Text
            width={{ base: '18rem', md: '30rem' }}
            fontSize={{ base: 'md', md: '2xl' }}
          >
            Join{' '}
            <Link
              color='#D02128'
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
