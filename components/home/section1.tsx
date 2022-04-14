import React from 'react'
import Image from 'next/image'

import {
  Flex,
  Text,
  HStack,
  chakra,
  Link
} from '@chakra-ui/react'

import Underline from 'components/common/underline'

class Section1 extends React.Component {
  render() {
    return (
      <Flex 
        flexDir='column' 
        justifyContent='center' 
        alignItems='center' 
        paddingX={{ base: 8, md: 16}}
        rowGap={{ base: 4, md: 8 }}
        >

        <Text fontWeight={700} fontSize={{base: '4xl', md: '6xl' }} textAlign='center' maxW={750}>
          Media and Social DAO Onboarding 1 billion people to crypto
        </Text>

        <Underline />

        <Text><chakra.span fontSize='xl' color='gray.500' background='none'>We’re Headed West...</chakra.span> Join Us</Text>      

        <HStack spacing='58px' width='100%' justifyContent='center' display={{ base: 'none', sm: 'flex'}}>
          <Link fontSize='2xl' href='https://forum.bankless.community/t/banklessdao-white-paper/3130'>Whitepaper</Link>
          <Link fontSize='2xl' href='https://discord.gg/bjPz2w9Zts'>Discord</Link>
          <Link fontSize='2xl' href='https://twitter.com/banklessDAO'>Twitter</Link>
          <Link fontSize='2xl' href='/new-members'>New Members Start</Link>
        </HStack>  

        <video width="800" height="600" autoPlay loop muted playsInline>
          <source src="/videos/DAOhandLogo.mp4" type="video/mp4" />
        </video>

      </Flex>
    )
  }
}

export default Section1
