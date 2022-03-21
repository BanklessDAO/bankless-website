import React from 'react'
import Image from 'next/image'

import {
  Box,
  Flex
} from '@chakra-ui/react'


class ImageOrbit extends React.Component {
  render() {
    return (
      <Flex
        width={"100%"}
        flexDir="column"
        justifyContent="center"
        alignItems="center">
        <Box
            display={["none", "block"]}
            height={"680px"}
            min-width={"900px"}
            mt={"200px"}
            mb={"200px"}
            mr={"0px"}
            ml={"0px"}
        >
          <Box
              border={"43px solid #131313"}
              height={"860px"}
              width={"860px"}
              boxShadow={"0 0 40px 40px #131313, inset 0px 0px 40px 40px #000"}
              borderRadius={"100%"}
              boxSizing={"border-box"}
          >
            <Box
                border={"63px solid #131313"}
                borderRadius={"100%"}
                boxSizing={"border-box"}
                height={"760px"}
                width={"760px"}
                position={"relative"}
                top={"1%"}
                left={"1%"}
                boxShadow={"inset 0 0 40px 40px #131313"}
            >
              <Box
                  border={"6px solid rgba(255, 16, 19, 0.15)"}
                  borderRadius={"100%"}
                  boxSizing={"border-box"}
                  height={"300px"}
                  width={"300px"}
                  position={"relative"}
                  top={"25%"}
                  left={"25%"}
              >
                <Box
                    position={"relative"}
                    top={"30%"}
                    left={"30%"}
                >
                  <Image src={"/images/about-image-orbit-center.png"} width={120} height={120}/>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    )
  }
}

export default ImageOrbit