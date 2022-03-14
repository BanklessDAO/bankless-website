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
        className="section-container about-section"
        flexDir="column"
        justifyContent="center"
        alignItems="center">
        <Box align={"center"} className="section">
        <Text fontSize="4xl" className="banner-text">
          {'Our mission is to onboard 1 billion people to crypto'.toUpperCase()}
        </Text>

        <div className="banner-underline">&nbsp;</div>
        <Text className={"light-grey mission-section"} align={"center"}>The nodes in our growing ecosystem collaborate to create user-friendly onramps for people to discover, use, learn, and enjoy the benefits of Web3. Everyone falls down the rabbithole a different way—we provide all the ways.</Text>
        </Box>
      </Flex>
    )
  }
}

export default MissionSection