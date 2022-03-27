import React from 'react'
import Image from 'next/image'

import {
  Container,
  Flex,
  Text,
  Box,
  VStack
} from '@chakra-ui/react'
import ImageCarousel from "../common/image-carousel";


class OurValuesSection extends React.Component {
  render() {
    return (
      <Flex
        flexDir='column'
        justifyContent='left'
        alignItems='left'>
        <Box>
            <Text fontSize={["2xl", "4xl"]} fontWeight={700} alignItems={["center", "left"]} width={"75%"} mt={120}>
              {'Our Values'.toUpperCase()}
            </Text>
            <Container maxW='container.xl' p={0}>
                <ImageCarousel/>
            </Container>
        </Box>
      </Flex>
    )
  }
}

export default OurValuesSection