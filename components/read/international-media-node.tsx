import React from 'react'
import Image from 'next/image'

import {
  Container,
  Box,
  Heading,
  Grid,
  Text,
  Flex,
  VStack,
} from '@chakra-ui/react'
import Underline from 'components/_common/underline'

class Section1 extends React.Component {
  render() {
    return (
      <Container maxW='100%' centerContent p={0} pt={'6rem'}>
        <Flex
          flexDir='column'
          gap={4}
          justifyContent='center'
          alignItems='center'>
          <Box zIndex={1} m={0}>
            <Text
              fontWeight={700}
              fontSize={{ base: '4xl', md: '6xl' }}
              maxW={{base: 400, lg: 750}}
              fontFamily='Clear Sans'
              textAlign={{ base: 'left', md: 'center' }}
              lineHeight={1.2}>
              International Media Nodes
            </Text>
            <Underline />
          </Box>
          <Text
            fontSize='xl'
            color='grey'
            px={{ base: 0, md: '6rem' }}
            textAlign={{ base: 'left', md: 'center' }}
            fontFamily='Clear Sans'
            lineHeight={1.2}>
            International Media Nodes (IMN) are Bankless channels that spread
            the message of the Bankless movement beyond North America. They
            translate BanklessDAO content, publish original pieces, run Twitter
            pages and ship newsletters. Find their home pages below.
          </Text>

          <Grid
            gridTemplateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr' }}
            gap={{ base: 4, md: 8 }}
            mb={{ base: '2rem', md: '4rem' }}
            mt={{ base: '2rem', md: '4rem', lg: 0 }}>
            <Box>
              <Image
                src='/bankless-website/public/read/imn-assets/bhutan.png'
                height={250}
                width={250}
                alt='Bhutan'
              />
            </Box>
            <Box>
              <Image
                src='/bankless-website/public/read/imn-assets/sweden.png'
                height={250}
                width={250}
                alt='Sweden'
              />
            </Box>
            <Box>
              <Image
                src='/bankless-website/public/read/imn-assets/greece.png'
                height={250}
                width={250}
                alt='Greece'
              />
            </Box>
            <Box>
              <Image
                src='/bankless-website/public/read/imn-assets/turkey.png'
                height={250}
                width={250}
                alt='Turkey'
              />
            </Box>
            <Box>
              <Image
                src='/bankless-website/public/read/imn-assets/bulgaria.png'
                height={250}
                width={250}
                alt='Bulgaria'
              />
            </Box>
            <Box>
              <Image
                src='/bankless-website/public/read/imn-assets/japan.png'
                height={250}
                width={250}
                alt='Japan'
              />
            </Box>
          </Grid>
        </Flex>
      </Container>
    )
  }
}

export default Section1
