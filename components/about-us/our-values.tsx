import React from 'react'
import Image from 'next/image'

import {
  Container,
  Flex,
  Text,
  Box,
  VStack
} from '@chakra-ui/react'


class OurValuesSection extends React.Component {
  render() {
    return (
      <Flex
        flexDir='column'
        justifyContent='left'
        alignItems='left'>
        <Box>
            <Text fontSize={["2xl", "4xl"]} fontWeight={700} alignItems={["center", "left"]} width={"75%"} mt={120}>
              {'Our Values'.toUpperCase()}
            </Text>
            <Container maxW='container.xl' p={0}>
                <Flex py={5} direction={['column', 'row']}>
                  <VStack pr={2} alignItems={["center"]}>
                      <Image
                      src='/images/our-values-education.png'
                      height={248}
                      width={404}
                      alt='Our Values - Education'
                    />
                      <Text position={"relative"} top={-20} casing={"uppercase"} fontWeight={700}>Education</Text>
                  </VStack>

                  <VStack px={2} alignItems={["center"]}>
                      <Image
                      src='/images/our-values-culture.png'
                      height={248}
                      width={404}
                      alt='Our Values - Culture'
                    />
                      <Text position={"relative"} mt={0} top={-74} casing={"uppercase"} fontWeight={700}>Culture</Text>
                  </VStack>

                  <VStack pl={2} alignItems={["center"]}>
                      <Image
                      src='/images/our-values-decentralized-governance.png'
                      height={248}
                      width={404}
                      alt='Our Values - Decentralized Governance'
                    />
                      <Text position={"relative"} top={-20} casing={"uppercase"} fontWeight={700}>Decentralized Governance</Text>
                  </VStack>
                </Flex>
           </Container>

        </Box>
      </Flex>
    )
  }
}

export default OurValuesSection