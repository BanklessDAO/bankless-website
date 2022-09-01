import { Flex, Text } from '@chakra-ui/react'
import { calcTimeLeft } from 'components/utils/snapshot'
import React from 'react'

const TimeLeft = ({ end }) => {
  const timeLeft = calcTimeLeft(end)

  return (
    <Flex>
      <Text color='grey'>{timeLeft}</Text>
    </Flex>
  )
}

export default TimeLeft
