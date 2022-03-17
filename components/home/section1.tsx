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
      <Flex flexDir='column' justifyContent='center' alignItems='center' padding={24}>

        <Text fontWeight={700} fontSize='6xl' textAlign='center' maxW={750}>
          Media and Social DAO Onboarding 1 billion people to crypto
        </Text>

        <Underline />

        <Text><chakra.span fontSize='xl' color='gray.500' background='none'>We’re Headed West...</chakra.span> Join Us</Text>      

        <HStack spacing='58px' width='100%' justifyContent='center' my={8}>
          <Link fontSize='2xl' href='#'>Whitepaper</Link>
          <Link fontSize='2xl' href='https://discord.gg/bjPz2w9Zts'>Discord</Link>
          <Link fontSize='2xl' href='https://twitter.com/banklessDAO'>Twitter</Link>
          <Link fontSize='2xl' href='#'>New Members Start</Link>
        </HStack>  
        
        <Image
          src='https://s3-alpha-sig.figma.com/img/0d4d/fb58/54a73a14f7a41a09c96399acb634a29d?Expires=1646006400&Signature=IH8AXlx7ICC~PgYQIzFVNAUpOIeST-pImvgQEKnewMIn-LF1s-E0Y6rCAFltjbjwb1u4JBgVh8lvMzIxcZ0nEvKHM58qB4JxXR~naGC8AntEZoOqLS-1bIfqrsFEvkMs-uRzCeHoJKH5YBtTdRD6-rRF7ZlmUqkB0az11R3jUG4FnlKhIEvyoZAyGbIyF-xxZXIJWDBgfx5OAdo44Iv1IOuKq7XG80Bh-uSBPCgo-UjJ-pbJY942LLAxmmo8uSWmTHPMwnRl8326sANGRDL~YjN-~fvOAQTEf3bGlfiSEp38xCGcQUmT8QHOS79N9dLiLhpabmJQYLzKgQUnBiyrlQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          height='600'
          width='800'
          alt='bankless-gif'
        />
      </Flex>
    )
  }
}

export default Section1
