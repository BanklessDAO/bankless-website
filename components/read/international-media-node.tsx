import React from 'react'
import Image from 'next/image'

import { Container, Box, Heading, Wrap, WrapItem, Text } from '@chakra-ui/react'

class Section1 extends React.Component {
  render() {
    return (
      <Container maxW='4xl' centerContent>
        <Heading as='h2' size='xl' color='white' textTransform='uppercase'>
          International Media Nodes
        </Heading>
          <Text fontSize='md' color='rgba(255, 255, 255, 0.57)'>
          International Media Nodes (IMN) are Bankless channels that spread the
          message of the Bankless movement beyond North America.They translate
          BanklessDAO content, publish original pieces, run Twitter pages and
          ship newsletters. Find their home pages below.
          </Text>

        <Wrap>
          <WrapItem>
            <Image
              src='/read/imn-assets/bhutan.png'
              height={250}
              width={250}
              alt='Bhutan'
            />
          </WrapItem>
          <WrapItem>
            <Image
              src='/read/imn-assets/sweden.png'
              height={250}
              width={250}
              alt='Sweden'
            />
          </WrapItem>
          <WrapItem>
            <Image
              src='/read/imn-assets/greece.png'
              height={250}
              width={250}
              alt='Greece'
            />
          </WrapItem>
          <WrapItem>
            <Image
              src='/read/imn-assets/turkey.png'
              height={250}
              width={250}
              alt='Turkey'
            />
          </WrapItem>
          <WrapItem>
            <Image
              src='/read/imn-assets/bulgaria.png'
              height={250}
              width={250}
              alt='Bulgaria'
            />
          </WrapItem>
          <WrapItem>
            <Image
              src='/read/imn-assets/japan.png'
              height={250}
              width={250}
              alt='Japan'
            />
          </WrapItem>
        </Wrap>
      </Container>
    )
  }
}

export default Section1
