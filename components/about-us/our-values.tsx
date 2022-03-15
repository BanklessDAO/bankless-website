import React from 'react'

import {
  Flex,
  Text,
  Box,
} from '@chakra-ui/react'


class OurValuesSection extends React.Component {
  render() {
    return (
      <Flex
        className='section-container about-section'
        flexDir='column'
        justifyContent='left'
        alignItems='left'>
        <Box className='section'>
            <Text fontSize='4xl' className='banner-text left-align'>
              {'Our Values'.toUpperCase()}
            </Text>

        </Box>
      </Flex>
    )
  }
}

export default OurValuesSection