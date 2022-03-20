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
    className="section-container"
    flexDir="row"
    justifyContent="left"
    alignItems="left">
      <Box className="main-image">
        <Box
            flexDir='column'
            display={"block"}
            alignItems='left'
            position={"relative"}
            t={0}
            l={0}
            height={"800px"}
        >
          <Box
            position={"absolute"}
            top={["5%","8%"]}
            left={["-20%","-5%"]}
            width={["100%"]}
            height={["100%"]}
            zIndex={"5"}
          >
          <Image src="/images/main-instructor.svg" alt="Main Image for About Us" width={800} height={580} objectFit="scale-down" />
          </Box>

          <Box
            position={"relative"}
            top={["5%","-10%"]}
            left={["0%","3%"]}
            width={["80%", "100%"]}
            height={["80%", "100%"]}
            zIndex={"1"}
          >
          <Image src="/images/red-ellipse-gradient.svg" alt="Red Gradient Background" width={1150} height={900} objectFit="contain"  objectPosition={"relative"} />
          </Box>

          <Box
              position={"absolute"}
              top={["40%", "65%"]}
              left={["40%", "35%"]}
          >
          <Image alt='bitcoin' src="/images/tiny-circle-bitcoin.svg" objectFit="none" width={50} height={50}/>
          </Box>

          <Box
              position={"absolute"}
              top={["10%","30%"]}
              left={["40%", "46%"]}
          >
          <Image alt='bankless' src="/images/tiny-circle-bankless.svg" objectFit="none" width={50} height={50}/>
          </Box>

          <Box
              position={"absolute"}
              top={["9%", "38%"]}
              left={["-2%", "7%"]}
          >
          <Image alt='tezos' src="/images/tiny-circle-tezos.svg" objectFit="none" width={50} height={50}/>
          </Box>

          <Box
              position={"absolute"}
              top={["29%", "53%"]}
              left={["-2%","54%"]}
          >
          <Image alt='aragon' src="/images/tiny-circle-aragon.svg" objectFit="none" width={50} height={50}/>
          </Box>

          <Box
              position={"absolute"}
              top={["26%","20%"]}
              left={["34%", "61%"]}
          >
          <Image alt='ethereum' src="/images/tiny-circle-ethereum.svg" objectFit="none" width={50} height={50}/>
          </Box>
        </Box>
        <Box
          position={"absolute"}
          display={"inline-block"}
          top={["8%", "28%", "6%"]}
          right={["8%"]}
          height={"800px"}
        >
          <Text
              fontStyle={"normal"}
              fontWeight={700}
              fontSize={["50px","50px", "90px"]}
              lineHeight={["80px","80px", "135px"]}>
            {'Want Alpha?'.toUpperCase()}
          </Text>
          <Text
              fontStyle={"normal"}
              fontWeight={400}
              fontSize={["30px", "30px", "76px"]}
              lineHeight={["80px", "80px", "130px"]}>
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
