import React from 'react'
import Image from 'next/image'

import { Container, Box, Heading, Grid, Text, Flex } from '@chakra-ui/react'
import Underline from 'components/common/underline'

class Section1 extends React.Component {
  render() {
    return (
      <Container maxW='100%' centerContent pt={'6rem'}>
        <Flex
          flexDir='column'
          gap={4}
          justifyContent='center'
          alignItems='center'>
          <Box >
            <Heading as='h2' size='xl' color='white' textTransform='uppercase'>
              International Media Nodes
            </Heading>
            <Underline />
          </Box>
          <Text fontSize='lg' color='rgba(255, 255, 255, 0.57)' px='6rem' textAlign='center'>
            International Media Nodes (IMN) are Bankless channels that spread
            the message of the Bankless movement beyond North America.They
            translate BanklessDAO content, publish original pieces, run Twitter
            pages and ship newsletters. Find their home pages below.
          </Text>

          <Grid
            gridTemplateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr' }}
            gap={8}
            mb='4rem'>
            <Box>
              <Image
                src='/read/imn-assets/bhutan.png'
                height={250}
                width={250}
                alt='Bhutan'
              />
            </Box>
            <Box>
              <Image
                src='/read/imn-assets/sweden.png'
                height={250}
                width={250}
                alt='Sweden'
              />
            </Box>
            <Box>
              <Image
                src='/read/imn-assets/greece.png'
                height={250}
                width={250}
                alt='Greece'
              />
            </Box>
            <Box>
              <Image
                src='/read/imn-assets/turkey.png'
                height={250}
                width={250}
                alt='Turkey'
              />
            </Box>
            <Box>
              <Image
                src='/read/imn-assets/bulgaria.png'
                height={250}
                width={250}
                alt='Bulgaria'
              />
            </Box>
            <Box>
              <Image
                src='/read/imn-assets/japan.png'
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
