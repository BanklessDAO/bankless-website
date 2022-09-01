import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import { organizeVoteInfo } from 'components/utils/snapshot'
import React from 'react'

const VoteInfo = ({ total, choices, results }) => {
  const votes = organizeVoteInfo(total, choices, results)

  const voteList = Object.entries(votes).map(vote => {
    return vote
  })

  const resultList = voteList.map(vote => {
    const choice = vote[0]
    const result = vote[1]
    const barLen = `${result}px`

    return (
      <Flex key={choice} px='.5em' direction='column' align='flex-end'>
        <Text color='white'>{choice}</Text>
        <Text color='grey'>{`${result}%`}</Text>
        <Flex w='100px' direction='column'>
          <Box w='100px' h='5px' bg='grey' />
          <Box w={barLen} h='5px' bg='red' position='relative' top='-5px' />
        </Flex>
      </Flex>
    )
  })

  return (
    <VStack flexGrow={1} minW='300px' align='flex-end'>
      {resultList}
    </VStack>
  )
}

export default VoteInfo
