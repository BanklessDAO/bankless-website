import React from 'react'
import {
  Flex,
  Text,
  Box,
} from '@chakra-ui/react'


class VisionSection extends React.Component {
  render() {
    return (
      <Flex
        className='section-container about-section'
        flexDir='column'
        justifyContent='center'
        alignItems='center'>
        <Box align={"center"} className='section'>
            <Text fontSize='4xl' className='banner-text'>
              {'Our Vision is to make financial independence, decentralized work, and creative freedom accessible to all'.toUpperCase()}
            </Text>

            <div className='banner-underline'>&nbsp;</div>
            <Text className={"light-grey vision-section"} align={"center"}>We work to build a world where anyone with an internet connection has access to the tools needed to achieve financial independence. We want everyone to be able to open a computer, find a DAO, start working, and get paid. We want to enable visionaries to unlock their true creative freedom with the power of Web3.</Text>
        </Box>
      </Flex>
    )
  }
}

export default VisionSection