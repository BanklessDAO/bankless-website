import React from 'react'
import Image from 'next/image'
import {
  Flex,
  Text,
  Box,
} from '@chakra-ui/react'


class JoinUsSection extends React.Component {
  render() {
    return (
      <Flex
        width={"100%"}
        flexDir='column'
        justifyContent='center'
        alignItems='center'>

        <Box
        width={[
          "90%",
          "50%",
        ]}
        >
            <Text fontSize={["2xl", "4xl"]} fontWeight={700} alignItems={["center", "left"]} width={"75%"} mt={120}>
              {'Join Us'.toUpperCase()}
            </Text>
            <Box
              w="20%"
              h="9px"
              bgGradient="linear(to right, #FF1013 44.79%, rgba(140, 29, 207, 0.2) 101.77%, rgba(255,0,0,0))"
              mb={"20px"}
              blur={"5px"}
              filter={"blur(5px)"}
              backdropFilter="auto"
              backdropBlur="5px"
            />
            <Text color="white.900">This open and liberal financial system is just getting started. We’re building new economies, new ways to work, new thought leadership and scholarship, and new forms of art.</Text>
            <Text fontWeight={700} mt={50}>
              Join us and embark on our mission:
            </Text>
            <Text color="white.900" lineHeight={["40px", "50px"]}>
              To educate the masses in this new decentralized money system that anyone can use to build wealth and climb the economic ladder.<br/>
To create new paradigms in how people coordinate, organize, and work.<br/>
To be at the forefront of art and culture.<br/>
To provide alpha every day and every hour of the year.
            </Text>
        </Box>
        <Box>

        </Box>
      </Flex>
    )
  }
}

export default JoinUsSection