import React from 'react'
import Image from 'next/image'

import { Box, Wrap, Heading, Container } from '@chakra-ui/react'

class Section1 extends React.Component {
  render() {
    return (
      <Container maxW='4xl'>
        <Heading as='h2' size='sm' color='white'>
          Decentralizing media one article at a time
        </Heading>
        <Wrap>
          <Box color='white' maxW='md'>
            BanklessDAO is building the first decentralized publishing house
            ever. Our newsletters and articles are translated into a variety of
            languages to reach a global audience. Find your crypto reading
            materials right here.{' '}
          </Box>
          <Box>
            <Image
              src='/read/pen-01.png'
              height={250}
              width={250}
              alt='Bhutan'
            />
          </Box>
        </Wrap>
      </Container>
    )
  }
}

export default Section1
