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
    width={"100%"}
    flexDir="row"
    justifyContent="left"
    alignItems="left">
      <Flex
          flexDir={['column', 'row']}
          display={"block"}
      >
        <Box
            display={"block"}
            alignItems='left'
            position={"relative"}
            t={0}
            l={0}
            height={"100%"}
        >
          <Box
            position={"absolute"}
            top={["0%","8%"]}
            left={["0%","-5%"]}
            width={["100%"]}
            height={["100%"]}
            zIndex={"5"}
          >
          <Image src="/images/main-instructor.svg" alt="Main Image for About Us" width={800} height={580} objectFit="scale-down" />
          </Box>

          <Box
            position={"relative"}
            top={["5%","-10%"]}
            left={["4%","3%"]}
            width={["80%", "100%"]}
            height={["80%", "100%"]}
            zIndex={"1"}
          >
          <Image src="/images/red-ellipse-gradient.svg" alt="Red Gradient Background" width={1150} height={900} objectFit="contain"  objectPosition={"relative"} />
          </Box>

          <Box
              position={"absolute"}
              top={["25%", "65%"]}
              right={["12%", "55%"]}
          >
          <Image alt='bitcoin' src="/images/tiny-circle-bitcoin.svg" objectFit="scale-down" width={50} height={50}/>
          </Box>

          <Box
              position={"absolute"}
              top={["5%","30%"]}
              right={["18%", "46%"]}
          >
          <Image alt='bankless' src="/images/tiny-circle-bankless.svg" objectFit="scale-down" width={50} height={50}/>
          </Box>

          <Box
              position={"absolute"}
              top={["7%", "38%"]}
              left={["18%", "7%"]}
          >
          <Image alt='tezos' src="/images/tiny-circle-tezos.svg" objectFit="scale-down" width={50} height={50}/>
          </Box>

          <Box
              position={"absolute"}
              top={["20%", "53%"]}
              left={["12%","54%"]}
          >
          <Image alt='aragon' src="/images/tiny-circle-aragon.svg" objectFit="scale-down" width={50} height={50}/>
          </Box>

          <Box
              position={"absolute"}
              top={["16%","20%"]}
              right={["21%", "38%"]}
          >
          <Image alt='ethereum' src="/images/tiny-circle-ethereum.svg" objectFit="scale-down" width={50} height={50}/>
          </Box>
        </Box>
        <Box
          position={"absolute"}
          display={"inline-block"}
          top={["8%", "28%", "6%"]}
          right={["8%"]}
          height={"100%"}
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
          <Text
          textDecoration={"underline"}
          >
            RAS <Image alt='diagonal arrow' src="/images/diagonal-arrow-up-right.png" objectFit="none" width={15} height={15}/>
          </Text>
        </Box>
      </Flex>
    </Flex>
    )
  }
}

export default MainImage
