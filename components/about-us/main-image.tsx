import React from 'react'
import Image from 'next/image'

import { Text, Box, Flex } from '@chakra-ui/react'

interface I_Props {
  img?: string
  title?: string
  text?: string
  href?: string
}

class MainImage extends React.PureComponent<I_Props> {
  render() {
    return (
    <Flex
    className="section-container about-section"
    flexDir="row"
    justifyContent="left"
    alignItems="left">
      <Box className="main-image">
        <Box className="img-container" flexDir='column' alignItems='left'>
          <Box className="instructor-img">
          <Image src="/images/main-instructor.svg" alt="Main Image for About Us" className="top" objectFit="none" width={800} height={580} />
          </Box>
          <Image src="/images/red-ellipse-gradient.svg" alt="Red Gradient Background" className="background" width={1150} height={900} />
          <Box className="floating-bitcoin">
          <Image src="/images/tiny-circle-bitcoin.svg" objectFit="none" width={50} height={50}/>
          </Box>
          <Box className="floating-bankless">
          <Image src="/images/tiny-circle-bankless.svg" objectFit="none" width={50} height={50}/>
          </Box>
          <Box className="floating-tezos">
          <Image src="/images/tiny-circle-tezos.svg" objectFit="none" width={50} height={50}/>
          </Box>
          <Box className="floating-aragon">
          <Image src="/images/tiny-circle-aragon.svg" objectFit="none" width={50} height={50}/>
          </Box>
          <Box className="floating-ethereum">
          <Image src="/images/tiny-circle-ethereum.svg" objectFit="none" width={50} height={50}/>
          </Box>
        </Box>
        <Box className="text-bubble">
          <Text className="heading">
            {'Want Alpha?'.toUpperCase()}
          </Text>
          <Text className="subheading">
            Join BanklessDAO
          </Text>
          <Text className="link">
            RAS
          </Text>
        </Box>
      </Box>
    </Flex>
    )
  }
}

export default MainImage
