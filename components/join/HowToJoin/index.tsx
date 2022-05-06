import React, { useState } from 'react'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import Steps from './Steps'

export default function HowToJoin() {
  const [step, setStep] = useState(1)

  return (
    <Stack>
      <Flex w='100%' justify='center'>
        <Text w='max' align='center' fontSize='4xl' fontWeight='600'>
          How to join BanklessDAO
          <Box
            w='100%'
            h='5px'
            bgGradient='linear(to-r, #FF1013 44.79%, rgba(140, 29, 207, 0) 100%)'
            filter='blur(3px)'
            mt={3.5}
            px={3}
          ></Box>
        </Text>
      </Flex>

      <Flex w='100%' justify='center' pt={10}>
        <Steps step={step} setStep={setStep} />
      </Flex>
    </Stack>
  )
}
