import { Box, Heading, Text, Stack } from '@chakra-ui/react'
import Underline from 'components/_common/underline'

export default function GovernanceIntroComponent() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 4, md: 6 }}
        py={{ base: 10, md: 18 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'110%'}
          color={'white.100'}
        >
          Governance
          <Underline />
        </Heading>
        <Text
          color={'grey'}
          fontSize={{ sm: 'sm', md: 'lg' }}
          textTransform={'uppercase'}
        >
          Governance is everyone’s responsibility at BanklessDAO
        </Text>
        <Text color={'white.200'} fontSize={{ sm: 'sm', md: 'lg' }}>
          At BanklessDAO, all decisions regarding governance, treasury,
          projects, and proposals are made through a democratic process. BANK
          holders ratify decisions on-chain through
          <Text
            color={'red'}
            fontSize={{ sm: 'sm', md: 'lg' }}
            display={'inline'}
          >
            &nbsp;Snapshot&nbsp;
          </Text>
          votes. Any BANK holder can vote in a snapshot. The more tokens you
          hold, the more voting power you have. See our recent governance
          decisions
          <Text
            color={'red'}
            fontSize={{ sm: 'sm', md: 'lg' }}
            display={'inline'}
          >
            &nbsp;here.&nbsp;
          </Text>
        </Text>
        <Box>
          <Text color={'white.200'} fontSize={{ sm: 'sm', md: 'lg' }}>
            While decisions are formally ratified on-chain, decision-making
            happens informally in our Discord channels, our
            <Text
              color={'red'}
              fontSize={{ sm: 'sm', md: 'lg' }}
              display={'inline-block'}
            >
              &nbsp;forum posts
            </Text>
            , and our voice rooms.
          </Text>
        </Box>
      </Stack>
    </>
  )
}
