import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { proposal, sortPropByState } from 'components/utils/snapshot'
import React, { useEffect, useState } from 'react'
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
      console.log(sortedProps)
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
    <Flex as='section' direction='column' align='center'>
      <ProposalList listTitle='Active Proposals' proposals={activeProposals} />
      <ProposalList listTitle='Recent Proposals' proposals={closedProposals} />
    </Flex>
  )
}

export default SnapshotSection
