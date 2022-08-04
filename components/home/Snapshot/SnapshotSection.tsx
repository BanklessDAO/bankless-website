import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { proposal, sortPropByState } from 'components/utils/snapshot'
import Underline from 'components/_common/underline'
import React, { useEffect, useState } from 'react'
import Column from './Column'
import ProposalList from './ProposalList'

const snapshotURL = 'https://hub.snapshot.org/graphql'
const snapshotQuery = `
query {
    proposals (
      first: 10,
      skip: 0,
      where: {
        space_in: ["banklessvault.eth"],
      },
      orderBy: "created",
      orderDirection: desc
    ) {
      id
      title
      choices
      start
      end
      state
      scores
      scores_total
    }
  }
`
type sorted = {
  active?: []
  closed?: []
}

const SnapshotSection = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [activeProposals, setActiveProposals] = useState<proposal[]>([])
  const [closedProposals, setClosedProposals] = useState<proposal[]>([])

  useEffect(() => {
    const fetchSnapshot = async () => {
      const res = await fetch(snapshotURL, {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: snapshotQuery }),
      })

      const result = await res.json()
      const proposals = result.data.proposals
      const sortedProps: sorted = sortPropByState(proposals)
      const active = sortedProps?.active
      const closed = sortedProps?.closed
      if (active) {
        setActiveProposals(active)
      }
      if (closed) {
        setClosedProposals(closed)
      }
      setIsLoading(false)
    }

    fetchSnapshot()
  }, [])

  if (isLoading) {
    return (
      <Flex as='section' direction='column'>
        <Heading as='h3'>We are a democratic organization</Heading>
        <Text>Hold on while we count the votes...</Text>
      </Flex>
    )
  }
  return (
    <Flex as='section' direction='column' align='center' className='govCetner'>
      <Flex
        w='100%'
        className='triangleRoof'
        bg='#262626'
        minH='50px'
        display={{ base: 'none', sm: 'flex' }}
        sx={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
      />
      <Heading
        as='h3'
        color='white'
        // borderBottom='5px solid #d02128'
        w='100%'
        textAlign='center'
        // borderX='1px solid #d02128'
        borderRadius='1em'>
        DAO Governance
      </Heading>
      <Flex
        w='100%'
        h='5px'
        mb='1em'
        bg='linear-gradient(
          91.88deg,
          #d02128 44.79%,
          rgba(140, 29, 207, 0) 101.77%
        )'
      />
      <Flex direction='row' w='100%' className='govCenter' py='10px'>
        <Column />
        <Flex p='10px' direction='column'>
          <ProposalList proposals={activeProposals} />
          <ProposalList proposals={closedProposals} />
        </Flex>
        <Column />
      </Flex>
    </Flex>
  )
}

export default SnapshotSection
