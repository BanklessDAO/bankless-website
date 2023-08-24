import { Stack, Circle, Text, Grid } from '@chakra-ui/react'
import React from 'react'

export default function Steps() {
  return (
    <Stack
      spacing={3}
      maxW='20rem'
      py={5}
      px={6}
      rounded='3xl'
      background='linear-gradient(0deg, rgba(121, 121, 121, 0.08), rgba(121, 121, 121, 0.08)), linear-gradient(126.6deg, rgba(255, 255, 255, 0.153) 28.69%, rgba(255, 255, 255, 0) 100%);'
      boxShadow='4px 4px 20px 1px rgba(0, 0, 0, 0.3)'
      backdropFilter='blur(32px)'
    >
      <Circle
        size={12}
        bg='#D02128'
        color='white'
        fontSize={20}
        fontWeight={700}
      >
        1
      </Circle>
      <Stack spacing={2}>
        <Text fontWeight={600}>READ, FOLLOW, LISTEN AND LEARN</Text>
        <Text fontSize='sm' fontWeight={600}>
          Subscribe, bookmark, and follow along to receive updates and news from
          the community:
        </Text>
      </Stack>
      <Grid fontSize='sm'>
        <Text fontSize='sm' color='rgba(208, 33, 40, 1)'>
          The Weekly Rollup
        </Text>
        <Text fontSize='sm' color='rgba(208, 33, 40, 1)'>
          The Weekly Rollup
        </Text>
      </Grid>
    </Stack>
  )
}
