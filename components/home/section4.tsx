import React from 'react'

import { Flex, Text, Box, Image } from '@chakra-ui/react'
import Underline from 'components/common/underline'
import Link from 'next/link'

const MULTI_SIG_OWNERS = [
  {
    img: '/profile-pics/livethelifetv.png',
    name: 'LiveTheLifeTV',
    twitter: '#',
  },
  {
    img: '/profile-pics/kouros.png',
    name: 'Kouros',
    twitter: 'https://twitter.com/DavidColeto',
  },
  {
    img: '/profile-pics/0xlucas.png',
    name: '0xLucas',
    twitter: '#',
  },
  {
    img: '/profile-pics/eagle.eth.png',
    name: 'Eagle.eth',
    twitter: '#',
  },
  {
    img: '/profile-pics/tommyoloffson.png',
    name: 'tommyoloffson',
    twitter: '#',
  },
]

const GRANT_COMMITTEE_MEMBERS = [
  {
    img: '/profile-pics/livethelifetv.png',
    name: 'LiveTheLifeTV',
    twitter: '#',
  },
  {
    img: '/profile-pics/kouros.png',
    name: 'Kouros',
    twitter: 'https://twitter.com/DavidColeto',
  },
  {
    img: '/profile-pics/0xlucas.png',
    name: '0xLucas',
    twitter: '#',
  },
  {
    img: '/profile-pics/eagle.eth.png',
    name: 'Eagle.eth',
    twitter: '#',
  },
  {
    img: '/profile-pics/tommyoloffson.png',
    name: 'tommyoloffson',
    twitter: '#',
  },
]

class Section4 extends React.Component {
  render() {
    return (
      <Flex flexDir='column' justifyContent='center' alignItems='center'>
        <Text
          fontSize='4xl'
          wordBreak={'break-word'}
          textAlign='center'
          fontWeight={700}
          marginTop={{ base: 39, lg: 25 }}
          width={{ base: '80%', lg: '60%' }}
        >
          {'Treasury multi-sig owners'.toUpperCase()}
        </Text>
        <Underline />

        <Flex
          flexWrap='wrap'
          flexDir='row'
          justifyContent='center'
          alignItems='space-between'
          rowGap={8}
        >
          {MULTI_SIG_OWNERS.map(_multiSigOwner => {
            return (
              <Flex
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                width={{ base: '50%', lg: '30%' }}
                key={_multiSigOwner.name}
                rowGap='1.5vh'
              >
                <Box
                  borderRadius='100%'
                  width='fit-content'
                  boxShadow='-4px 6px 20px red'
                >
                  <Image
                    src={_multiSigOwner.img}
                    alt={_multiSigOwner.name}
                    width={{ base: '150px', md: '200px' }}
                    height={{ base: '150px', md: '200px' }}
                  />
                </Box>

                <Flex
                  flexDir='row'
                  justifyContent='space-between'
                  alignItems='center'
                  pt={4}
                >
                  <Text fontSize={{ base: 'xl', md: '2xl' }} style={{ marginRight: 8 }}>
                    {_multiSigOwner.name}
                  </Text>
                  <Flex
                    flexDir='row'
                    justifyContent='center'
                    alignItems='center'
                    backgroundColor='#1da1f2'
                    borderRadius='100%'
                    w='20px'
                    h='20px'
                    cursor='pointer'
                  >
                    <Link href={_multiSigOwner.twitter} passHref={true}>
                      <Image
                        src='/icons/twitter.png'
                        alt='twitter'
                        width='10px'
                        height='10px'
                      />
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            )
          })}
        </Flex>

        <Text
          fontSize='4xl'
          wordBreak={'break-word'}
          textAlign='center'
          fontWeight={700}
          marginTop={{ base: 32, lg: 24 }}
          width={{ base: '80%', lg: '60%' }}
        >
          {'Grants committee members'.toUpperCase()}
        </Text>
        <Underline />

        <Flex
          flexWrap='wrap'
          flexDir='row'
          justifyContent='center'
          alignItems='space-between'
          rowGap={8}
        >
          {GRANT_COMMITTEE_MEMBERS.map(_multiSigOwner => {
            return (
              <Flex
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                width={{ base: '50%', lg: '30%' }}
                key={_multiSigOwner.name}
                rowGap='1.5vh'
              >
                <Box
                  borderRadius='100%'
                  width='fit-content'
                  boxShadow='-4px 6px 20px red'
                >
                  <Image
                    src={_multiSigOwner.img}
                    alt={_multiSigOwner.name}
                    width={{ base: '150px', md: '200px' }}
                    height={{ base: '150px', md: '200px' }}
                  />
                </Box>

                <Flex
                  flexDir='row'
                  justifyContent='space-between'
                  alignItems='center'
                  pt={4}
                >
                  <Text fontSize='2xl' style={{ marginRight: 8 }}>
                    {_multiSigOwner.name}
                  </Text>
                  <Flex
                    flexDir='row'
                    justifyContent='center'
                    alignItems='center'
                    backgroundColor='#1da1f2'
                    borderRadius='100%'
                    w='20px'
                    h='20px'
                    cursor='pointer'
                  >
                    <Link href={_multiSigOwner.twitter} passHref={true}>
                      <Image
                        src='/icons/twitter.png'
                        alt='twitter'
                        width='10px'
                        height='10px'
                      />
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    )
  }
}

export default Section4
