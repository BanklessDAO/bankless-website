import React from 'react'
import Image from 'next/image'

import {
  Flex,
  Text,
  Box,
} from '@chakra-ui/react'


class AboutSection extends React.Component {
  render() {
    return (
      <Flex
        className='section-container about-section'
        flexDir='column'
        justifyContent='center'
        alignItems='center'>

        <Box className='section'>
            <Image
              src='/images/about-us-img1.png'
              height={450}
              width={450}
              alt='crypto currency'
            />
            <Text fontSize='2xl'>
              Bankless is a movement for Web3 pioneers
            </Text>
            <Text className={"light-grey"}>We seek new ways to build wealth, solve human coordination problems, create culture, and develop cutting-edge thought leadership in the crypto space.
Going Bankless means taking control of your financial health by adopting decentralized and permissionless money systems.
Bankless is the movement educating the world on how to do it.</Text>
        </Box>

        <Box className='section'>
            <Image
              src='/images/dao-flag.png'
              height={450}
              width={450}
              alt='DAO Flag'
            />
            <Text fontSize='2xl'>
              BanklessDAO is the homebase
            </Text>
            <Text className={"light-grey"}>BanklessDAO is a community of passionate Web3 thought-leaders who aim to educate new users, produce written and audio media, build DAO tooling, provide consulting services, develop Web3 scholarship, and create a social and creative home base for anyone in Web3. We’re so much more than a social DAO—we’re a shipping, building, and innovating DAO.  </Text>
        </Box>
      </Flex>
    )
  }
}

export default AboutSection
