import React from 'react'
import { Flex, Image, Text, Stack } from '@chakra-ui/react'

export default function Hero() {
  return (
    <Flex align='center' py='5rem'>
      <Stack>
        <Text fontSize='2.5rem' fontWeight='700' color='#fff'>
          Join the most <br /> vibrant community-run <br /> Web3 organisation
        </Text>
        <Text maxW='30rem' fontSize='xl' color='rgba(153, 153, 153, 1)'>
          BanklessDAO’s ever-growing community of creatives, developers,
          innovators, and leaders is open to all. Always.
        </Text>
      </Stack>
      <Image
        src='/images/join/hero.png'
        alt='Join the most vibrant community-run Web3 organisation'
      />
    </Flex>
  )
}
