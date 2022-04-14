import React from 'react'
import Image from 'next/image'
import { Flex, Box, Text, Button, VStack, Grid, Link } from '@chakra-ui/react'

import Underline from 'components/common/underline'

class ComingSoon extends React.Component {
  render() {
    return (
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        mt={'4rem !important'}
      >
        <Box mb={'2.5rem'}>
          <Text fontWeight={700} fontSize='5xl' textAlign='center' maxW={750}>
            Coming Soon
          </Text>
          <Underline />
        </Box>

        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          columnGap={8}
          rowGap={8}
        >
          <VStack
            justifyContent='center'
            alignItems='center'
            background='#191919'
            rowGap={4}
            padding={6}
            borderRadius={16}
          >
            <Text fontWeight={700} fontSize='4xl' textAlign='center'>
              AB INITIO: FROM THE BEGINNING
            </Text>
            <Text fontWeight={700} fontSize='xl'>
              Hosted By{' '}
              <Link fontSize='2xl' color='red.600' textDecoration='none'>
                ComeBackKid
              </Link>{' '}
              and
              <Link fontSize='2xl' color='red.600' textDecoration='none' href={'https://twitter.com/lion917_eth'}>
                {' '}
                Lion917
              </Link>
            </Text>
            <Text fontSize='md' color='grey'>
              A Legal Guild podcast series with each episode focusing on
              addressing current DAO and crypto-related legal issues via an
              interview with a subject matter expert.
            </Text>
          </VStack>

          <VStack
            justifyContent='center'
            alignItems='center'
            background='#191919'
            rowGap={4}
            padding={6}
            borderRadius={16}
          >
            <Text fontWeight={700} fontSize='4xl' textAlign='center'>
              BOUNTY HUNTER
            </Text>
            <Text fontWeight={700} fontSize='xl'>
              Hosted By{' '}
              <Link fontSize='2xl' color='red.600' textDecoration='none' href='https://twitter.com/brandoncnolte'>
                Brandon Nolte
              </Link>
            </Text>
            <Text fontSize='md' color='grey'>
              Bounty Hunter is a show about how to find engaging and rewarding
              work in the new Web3 economy. Join serial entrepreneur{' '}
              <Link color='red.600' textDecoration='none' href='https://twitter.com/brandoncnolte'>
                Brandon Nolte{' '}
              </Link>
              as he interviews community builders, DAO contributors, and the
              best innovators in Web3. Follow Bounty Hunter on &nbsp;
              <Link color='red.600' textDecoration='none' href='https://twitter.com/BountyxHunterx'>
                Twitter.
              </Link>
            </Text>
          </VStack>
        </Grid>
      </Flex>
    )
  }
}

export default ComingSoon
