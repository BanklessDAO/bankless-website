import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Column = () => {
  const colColor = '#262626'
  return (
    <Flex
      minH='100%'
      direction='column'
      align='center'
      display={{ base: 'none', sm: 'flex' }}>
      <Box w='100%' bg={colColor} h='8px' minW='50px' />
      <Box w='75%' bg={colColor} h='5px' my='5px' />
      <Flex
        direction='row'
        grow={1}
        maxW='75%'
        minW='30px'
        justify='space-between'>
        <Box w='5px' h='100%' bg={colColor} borderRadius='2px' />
        <Box w='5px' h='100%' bg={colColor} borderRadius='2px' />
        <Box w='5px' h='100%' bg={colColor} borderRadius='2px' />
      </Flex>
      <Box w='75%' bg={colColor} h='5px' my='5px' />
      <Box w='100%' bg={colColor} h='8px' minW='50px' />
    </Flex>
  )
}

export default Column
