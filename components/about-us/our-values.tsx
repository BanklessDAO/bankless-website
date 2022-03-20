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
            <Text fontSize={["2xl", "4xl"]} fontWeight={700} alignItems={["center", "left"]} width={"75%"} mt={120}>
              {'Our Values'.toUpperCase()}
            </Text>

        </Box>
      </Flex>
    )
  }
}

export default OurValuesSection