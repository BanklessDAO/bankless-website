import { Flex, Text, Link } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Link
      as={Flex}
      href="/dao"
      h='100%'
      direction='column'
      align='center'
      justify='center'
      display={{ base: 'none', md: 'flex' }}>
      <Flex
        p='10px 15px 15px 15px'
        maxH='150px'
        bg='#111111'
        // border='2px solid white'
        justify='center'
        align='center'
        borderRadius='7px'>
        <Text
          textDecoration='underline'
          textDecorationColor='#D02128'
          textDecorationThickness='5px'
          fontWeight={800}
          fontSize='32px'>
          DAO
        </Text>
      </Flex>
    </Link>
  )
}

export default Logo
