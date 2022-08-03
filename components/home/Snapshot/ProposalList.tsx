import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

type ProposalListProps = {
  listTitle: string
  proposals: []
}
const ProposalList = ({ listTitle, proposals }) => {
  const propList = proposals.map(proposal => {
    return (
      <Box>
        <Text color='#FFFFFF'>{proposal.title}</Text>
      </Box>
    )
  })
  return (
    <Flex direction='column' w='100%' mb='1em' align='center'>
      <Heading as='h4' mb='.5em' color='white'>
        {listTitle}
      </Heading>
      <VStack>{propList}</VStack>
    </Flex>
  )
}

export default ProposalList
