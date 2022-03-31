import React from 'react'
import Image from 'next/image'

import { Flex, Text, Container, Stack, VStack } from '@chakra-ui/react'


class AboutSection extends React.Component {
  render() {
    return (
      <Flex
        flexDir='column'
        justifyContent='center'
        alignItems='center'>
        <Container maxW='container.l' p={0}>
            <Flex py={5} direction={{base: 'column', md:'row-reverse'}}>
              <VStack spacing={10} alignItems={{base: "center", md:"right"}}>
                  <Image
                  src='/images/about-crypto-img.png'
                  height={350}
                  width={350}
                  alt='crypto currency'
                />
              </VStack>
              <VStack p={10} spacing={5} alignItems={{base: "center", md:"left"}}>
                <Container>
                <Text fontWeight={700} lineHeight={{base: '30px', md:'58px'}} fontSize='2xl'>
                  Bankless is a movement for Web3 pioneers
                </Text>
                <Text fontWeight={400} lineHeight='22px' fontSize='18px' color="white.900">We seek new ways to build wealth, solve human coordination problems, create culture, and develop cutting-edge thought leadership in the crypto space.
    Going Bankless means taking control of your financial health by adopting decentralized and permissionless money systems.
    Bankless is the movement educating the world on how to do it.</Text>
                </Container>
              </VStack>
            </Flex>
        </Container>

        <Container maxW='container.xl' p={0}>
            <Stack py={5} direction={{base: 'column', md:'row'}}>
              <VStack spacing={10} alignItems={{base: "center", md:"left"}}>
                <Image
                  src='/images/about-dao-flag.png'
                  height={350}
                  width={350}
                  alt='DAO Flag'
                />
              </VStack>
              <VStack p={10} spacing={5} alignItems={{base: "center", md:"right"}}>
                <Container>
                <Text fontWeight={700} lineHeight={'58px'} fontSize='2xl'>
                BanklessDAO is the homebase
                </Text>
                <Text fontWeight={400} lineHeight='22px' fontSize='18px' color="white.900">BanklessDAO is a community of passionate Web3 thought-leaders who aim to educate new users, produce written and audio media, build DAO tooling, provide consulting services, develop Web3 scholarship, and create a social and creative home base for anyone in Web3.
                    We’re so much more than a social DAO—we’re a shipping, building, and innovating DAO.</Text>
                </Container>
              </VStack>
            </Stack>
        </Container>
      </Flex>
    )
  }
}

export default AboutSection
