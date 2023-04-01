import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { proposal, sortPropByState } from 'components/utils/snapshot'
import Logo from 'components/_common/Logo'
import Underline from 'components/_common/underline'
import React, { useEffect, useState } from 'react'
import Column from './Column'
import ProposalList from './ProposalList'

const snapshotURL = 'https://hub.snapshot.org/graphql'
const snapshotQuery = `
query {
    proposals (
      first: 5,
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
      try {
        const res = await fetch(snapshotURL, {
          method: 'Post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: snapshotQuery }),
        })
        if (res.ok === false) {
          console.error(
            'An error occured communicating with the snapshot GraphQL API'
          )
        } else {
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
      } catch (e) {
        console.log('error', e)
      }
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
        mb='1em'
        display={{ base: 'none', sm: 'flex' }}
        sx={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
      />
      <Flex
        w='100%'
        my='.5em'
        bg='#262626'
        borderRadius='.25em'
        h='5px'
        display={{ base: 'none', sm: 'flex' }}
      />
      <Flex justify={{ base: 'center', sm: 'space-between' }} w='100%'>
        <Column />
        <Flex direction='column' align='center' justify='center'>
          <Heading
            as='h3'
            color='white'
            w='100%'
            textAlign='center'
            borderRadius='1em'
          >
            DAO Governance
          </Heading>
          <Container
            filter='blur(2px)'
            my={4}
            fontSize='16px'
            lineHeight='6px'
            background='linear-gradient(
          91.88deg,
          #D02128 44.79%,
          rgba(140, 29, 207, 0) 101.77%
        )'
            w='100%'
          >
            &nbsp;
          </Container>
        </Flex>
        <Column />
      </Flex>
      <Flex
        w='100%'
        my='.5em'
        bg='#262626'
        borderRadius='.25em'
        h='5px'
        display={{ base: 'none', sm: 'flex' }}
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
