import React from 'react'
import Image from 'next/image'
import { Flex, Box, Text, Button, VStack, Grid, Link } from '@chakra-ui/react'

import Underline from 'components/common/underline'

class ComingSoon extends React.Component {
  render() {
    return (
      <Flex flexDirection='column' justifyContent='center' alignItems='center'>
        <Box mb={'2.5rem'}>
          <Text
            fontFamily={'clear sans'}
            fontWeight={700}
            mt='3rem'
            fontSize={{ base: '3xl', sm: '5xl' }}
            textAlign='center'
            maxW={750}
          >
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
            justifyContent='start'
            alignItems='center'
            background='#191919'
            minHeight={{ base: '320px', md: '380px' }}
            rowGap={4}
            padding={6}
            borderRadius={16}
          >
            <Text
              fontFamily={'clear sans'}
              fontWeight={700}
              mt={{ base: '0', sm: '0rem', xl: '0rem' }}
              fontSize={{ base: '1.4rem', sm: '4xl' }}
              textAlign='center'
            >
              AB INITIO: FROM THE BEGINNING
            </Text>
            <Text
              fontFamily={'clear sans'}
              textAlign='center'
              fontSize={{ base: 'sm', sm: 'xl' }}
            >
              Hosted By{' '}
              <Link color='red.600' textDecoration='none'>
                ComeBackKid
              </Link>{' '}
              and
              <Link
                color='red.600'
                textDecoration='none'
                href={'https://twitter.com/lion917_eth'}
              >
                {' '}
                Lion917
              </Link>
            </Text>
            <Text fontFamily={'clear sans'} fontSize='md' color='grey'>
              A Legal Guild podcast series with each episode focusing on
              addressing current DAO and crypto-related legal issues via an
              interview with a subject matter expert.
            </Text>
          </VStack>

          <VStack
            justifyContent='center'
            alignItems='center'
            background='#191919'
            minHeight={{ base: '320px', md: '380px' }}
            rowGap={4}
            padding={6}
            borderRadius={16}
          >
            <Text
              fontFamily={'clear sans'}
              fontWeight={700}
              mt={{ base: '0', sm: '0rem', xl: '0rem' }}
              fontSize={{ base: '1.4rem', sm: '4xl' }}
              textAlign='center'
            >
              BOUNTY HUNTER
            </Text>
            <Text
              fontFamily={'clear sans'}
              textAlign='center'
              fontSize={{ base: 'sm', sm: 'xl' }}
            >
              Hosted By{' '}
              <Link
                color='red.600'
                textDecoration='none'
                href='https://twitter.com/brandoncnolte'
              >
                Brandon Nolte
              </Link>
            </Text>
            <Text fontFamily={'clear sans'} fontSize='md' color='grey'>
              Bounty Hunter is a show about how to find engaging and rewarding
              work in the new Web3 economy. Join serial entrepreneur{' '}
              <Link
                color='red.600'
                textDecoration='none'
                href='https://twitter.com/brandoncnolte'
              >
                Brandon Nolte{' '}
              </Link>
              as he interviews community builders, DAO contributors, and the
              best innovators in Web3. Follow Bounty Hunter on &nbsp;
              <Link
                color='red.600'
                textDecoration='none'
                href='https://twitter.com/BountyxHunterx'
              >
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
