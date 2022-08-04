import { Flex, Text } from '@chakra-ui/react'
import { snapshotBaseURL } from 'components/utils/snapshot'
import React from 'react'
import TimeLeft from './TimeLeft'
import VoteInfo from './VoteInfo'

const Proposal = ({ proposal }) => {
  const snapshotLink = snapshotBaseURL + proposal.id

  const shadow = `.1em .1em .5em ${
    proposal.state == 'active' ? '#21b66e79' : '#7c3aed78'
  }`

  return (
    <Flex
      as='a'
      target='_'
      href={snapshotLink}
      borderRadius='1em'
      bg='#181818'
      w='100%'
      p='1em'
      wrap='wrap'
      minW='315px'
      _hover={{ boxShadow: shadow }}
      boxShadow='.1em .1em .5em ##7c3aed78'>
      <Flex direction='column' w='40%' minW='300px'>
        <Flex grow={1}>
          <Text color='white' fontSize='24px' fontWeight={700}>
            {proposal.title}
          </Text>
        </Flex>
        {proposal.state == 'closed' ? (
          <Text color='grey'>Voting Closed</Text>
        ) : (
          <TimeLeft end={proposal.end} />
        )}
      </Flex>
      <VoteInfo
        total={proposal.scores_total}
        choices={proposal.choices}
        results={proposal.scores}
      />
    </Flex>
  )
}

export default Proposal
