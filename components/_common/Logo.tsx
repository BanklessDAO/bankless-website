import { Flex, Text, Link, Image } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        h='70px'
        src='images/logo.png'
        alt='Logo'
        display={{ base: 'none', md: 'flex' }}
        sx={{
          '@media (max-width: 1040px)': {
            display: 'none',
          },
        }}
      />
      {/* <Flex
        h='100%'
        direction='column'
        align='center'
        justify='center'
        display={{ base: 'none', md: 'flex' }}
        sx={{
          '@media (max-width: 1040px)': {
            display: 'none',
          },
        }}
      >
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
      </Flex> */}
    </Link>
  )
}

export default Logo
