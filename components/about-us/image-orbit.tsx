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
            display={{base:"none", md:"block"}}
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
                  position={'absolute'}
                  top={{md:'3%'}}
                  right={{md:'2%'}}
                >
                  <Image src={"/images/about-image-orbit-outer-1.png"} width={75} height={75} alt='image-orbit-outer-1'/>
                </Box>

                <Box
                  position={'absolute'}
                  top={{md:'88%'}}
                  right={{md:'24%'}}
                >
                  <Image src={"/images/about-image-orbit-outer-2.png"} width={75} height={75} alt='image-orbit-outer-2'/>
                </Box>
                <Box
                  position={'absolute'}
                  top={{md:'43%'}}
                  left={{md:'-6%'}}
                >
                  <Image src={"/images/about-image-orbit-outer-3.png"} width={75} height={75} alt='image-orbit-outer-3'/>
                </Box>
              <Box
                  border={"6px solid rgba(255, 16, 19, 0.15)"}
                  borderRadius={"100%"}
                  boxSizing={"border-box"}
                  height={"500px"}
                  width={"500px"}
                  position={"relative"}
                  top={"11%"}
                  left={"11%"}
              >
                <Box
                  position={'absolute'}
                  top={{md:'3%'}}
                  left={{md:'7%'}}
                >
                  <Image src={"/images/about-image-orbit-mid-1.png"} width={75} height={75} alt='image-orbit-mid-1'/>
                </Box>

                <Box
                  position={'absolute'}
                  top={{md:'33%'}}
                  right={{md:'-5%'}}
                >
                  <Image src={"/images/about-image-orbit-mid-2.png"} width={75} height={75} alt='image-orbit-mid-2'/>
                </Box>

                <Box
                  position={'absolute'}
                  top={{md:'73%'}}
                  left={{md:'3%'}}
                >
                  <Image src={"/images/about-image-orbit-mid-3.png"} width={75} height={75} alt='image-orbit-mid-3'/>
                </Box>
                <Box
                    position={"relative"}
                    top={"30%"}
                    left={"30%"}
                >
                <Box
                  position={'absolute'}
                  top={{md:'-9%'}}
                  left={{md:'1%'}}
                >
                  <Image src={"/images/about-image-orbit-center.png"} width={200} height={200} alt='image-orbit-center'/>
                </Box>

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