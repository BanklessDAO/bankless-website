import React from 'react'
import {
  Flex,
  Text,
  Box,
} from '@chakra-ui/react'


class MissionSection extends React.Component {
  render() {
    return (
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center">
        <Box align={"center"}>
        <Text fontSize={["3xl", "4xl"]} fontWeight={700} alignItems={"center"} width={["95%","85%"]}>
          {'Our mission is to onboard 1 billion people to crypto'.toUpperCase()}
        </Text>
        <Box
          w="40%"
          h="9px"
          bgGradient="linear(to right, #FF1013 44.79%, rgba(140, 29, 207, 0.2) 101.77%, rgba(255,0,0,0))"
          mb={"30px"}
          mt={"20px"}
          blur={"5px"}
          filter={"blur(5px)"}
          backdropFilter="auto"
          backdropBlur="5px"
        />
        <Text width={["100%","50%"]} color="white.900" align={"center"}>The nodes in our growing ecosystem collaborate to create user-friendly onramps for people to discover, use, learn, and enjoy the benefits of Web3. Everyone falls down the rabbithole a different way—we provide all the ways.</Text>
        </Box>
      </Flex>
    )
  }
}

export default MissionSection