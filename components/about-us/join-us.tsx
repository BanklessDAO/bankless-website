import React from 'react'
import Image from 'next/image'

import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
} from '@chakra-ui/react'


class JoinUsSection extends React.Component {
  render() {
    return (
      <Flex
        className='section-container about-section'
        flexDir='column'
        justifyContent='center'
        alignItems='center'>

        <Box className='section'>
            <Text fontSize='4xl' className='banner-text left-align'>
              {'Join Us'.toUpperCase()}
            </Text>
            <div className='banner-underline'>&nbsp;</div>
            <Text className="">This open and liberal financial system is just getting started. We’re building new economies, new ways to work, new thought leadership and scholarship, and new forms of art.</Text>
            <Text className="">
              Join us and embark on our mission:
            </Text>
            <Text className="">
              To educate the masses in this new decentralized money system that anyone can use to build wealth and climb the economic ladder.
To create new paradigms in how people coordinate, organize, and work.
To be at the forefront of art and culture.
To provide alpha every day and every hour of the year.
            </Text>
        </Box>
        <Box className='video-section'>

        </Box>
      </Flex>
    )
  }
}

export default JoinUsSection