import { Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import Proposal from './Proposal'

const ProposalList = ({ proposals }) => {
  const propList = proposals.map(proposal => {
    return <Proposal key={proposal.id} proposal={proposal} />
  })
  return (
    <Flex
      direction='column'
      w='100%'
      mb='1em'
      align='flex-start'
      textAlign='start'
      className='voteSection'>
      <VStack w='100%'>{propList}</VStack>
    </Flex>
  )
}

export default ProposalList
