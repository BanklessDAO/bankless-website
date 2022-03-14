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
        className="section-container about-section"
        flexDir="column"
        justifyContent="center"
        alignItems="center">
        <Box className={"image-orbit"}>
          <Box className={"outer-ellipse"}>
            <Box className={"main-ellipse"}>
              <Box className={"inner-ellipse"}>
                <Box className={"orbit-center"}>
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