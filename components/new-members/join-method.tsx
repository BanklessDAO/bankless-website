import React from 'react'
import { Box, Heading, VStack, Stack } from '@chakra-ui/react'
import Underline from 'components/_common/underline'
import { Card } from './Card'
import cardsContent from './_cardsContent.json'

export default function NewMemberJoinMethodComponent() {
  return (
    <>
      <VStack as={Box} mt={'4rem'} mb={'8rem'}>
        <Heading
          fontFamily='Clear Sans'
          fontWeight={{ base: 600, md: 800 }}
          fontSize={{ base: '3xl', md: '4xl' }}
          lineHeight={'110%'}
          color={'white.100'}
          textTransform={'uppercase'}
          pb={{ base: '2rem', md: 0 }}>
          How to join
          <Underline />
        </Heading>
        <Stack
          w='100%'
          spacing='1rem'
          direction='row'
          justifyContent='center'
          alignItems='center'>
          {cardsContent.map((card, index) => (
            <Card card={card} index={index} />
          ))}
        </Stack>
      </VStack>
    </>
  )
}
