import React from 'react'
import Hero from './Hero'

import { Stack } from '@chakra-ui/react'
import HowToJoin from './HowToJoin'

export default function Listen() {
  return (
    <Stack spacing={8}>
      <Hero />
      <HowToJoin />
    </Stack>
  )
}
