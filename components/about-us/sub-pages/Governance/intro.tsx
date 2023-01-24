import { Box, Heading, Text, Stack, Flex } from '@chakra-ui/react'
import Underline from 'components/_common/underline'

export default function GovernanceIntroComponent() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 2, md: 6 }}
        py={{ base: 10, md: 18 }}
        position='relative'
        zIndex='docked'
      >
        <Heading
          fontWeight={700}
          fontSize={{
            base: '2.7rem',
            sm: '6xl',
            md: '7xl',
            lg: '7xl',
          }}
          lineHeight={'120%'}
          color={'white.100'}
        >
          Governance
          <Box margin='1rem auto' width={{ base: '90%', sm: '100%' }}>
            <Underline />
          </Box>
        </Heading>

        <Flex flexDirection='column' alignItems='center'>
          <Text
            color={'grey'}
            fontSize={{ sm: 'sm', md: 'lg' }}
            textTransform={'uppercase'}
            mb='1rem'
          >
            Governance is everyone’s responsibility at BanklessDAO
          </Text>
          <Text
            color={'white.200'}
            fontSize={{ sm: 'sm', md: 'lg' }}
            maxW={{ sm: '30rem', md: '35rem', lg: '50rem' }}
            my='1rem'
          >
            At BanklessDAO, all decisions regarding governance, treasury,
            projects, and proposals are made through a democratic process. BANK
            holders ratify decisions on-chain through
            <Text
              color={'#D02128'}
              fontSize={{ sm: 'sm', md: 'lg' }}
              display={'inline'}
            >
              &nbsp;Snapshot&nbsp;
            </Text>
            votes. Any BANK holder can vote in a snapshot. The more tokens you
            hold, the more voting power you have. See our recent governance
            decisions
            <Text
              color={'#D02128'}
              fontSize={{ sm: 'sm', md: 'lg' }}
              display={'inline'}
              maxW={{ sm: '20rem', md: '30rem', lg: '50rem' }}
            >
              &nbsp;here.&nbsp;
            </Text>
          </Text>
          <Box>
            <Text
              color={'white.200'}
              fontSize={{ sm: 'sm', md: 'lg' }}
              maxW={{ sm: '30rem', md: '35rem', lg: '50rem' }}
            >
              While decisions are formally ratified on-chain, decision-making
              happens informally in our Discord channels, our
              <Text
                color={'#D02128'}
                fontSize={{ sm: 'sm', md: 'lg' }}
                display={'inline-block'}
              >
                &nbsp;forum posts
              </Text>
              , and our voice rooms.
            </Text>
          </Box>
        </Flex>
      </Stack>
      <Box
        position='absolute'
        top={{ base: '0rem', sm: '0rem', md: '20rem' }}
        left={{ base: '0', sm: '0', md: '2%', lg: '5%', xl: '10%' }}
        bgGradient='linear(to-br, rgba(255, 16, 19, 0.3) 16.9%, rgba(140, 29, 207, 0.1) 88.02%)'
        filter='auto'
        blur='180px'
        h='55rem'
        w={{ base: '70%', lg: '50rem' }}
        borderRadius='full'
      ></Box>
    </>
  )
}
