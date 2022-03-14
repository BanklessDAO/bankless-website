import React from 'react'
import Image from 'next/image'

import { Flex, Text, Box, Button } from '@chakra-ui/react'

const MULTI_SIG_OWNERS = [
    {
      img: '/profile-pics/livethelifetv.png',
      name: 'LiveTheLifeTV',
      twitter: '#'
    },
    {
      img: '/profile-pics/kouros.png',
      name: 'Kouros',
      twitter: '#'
    },
    {
      img: '/profile-pics/0xlucas.png',
      name: '0xLucas',
      twitter: '#'
    },
    {
      img: '/profile-pics/eagle.eth.png',
      name: 'Eagle.eth',
      twitter: '#'
    },
    {
      img: '/profile-pics/tommyoloffson.png',
      name: 'tommyoloffson',
      twitter: '#'
    },
  ]
  
  const GRANT_COMMITTEE_MEMBERS = [
    {
      img: '/profile-pics/livethelifetv.png',
      name: 'LiveTheLifeTV',
      twitter: '#'
    },
    {
      img: '/profile-pics/kouros.png',
      name: 'Kouros',
      twitter: '#'
    },
    {
      img: '/profile-pics/0xlucas.png',
      name: '0xLucas',
      twitter: '#'
    },
    {
      img: '/profile-pics/eagle.eth.png',
      name: 'Eagle.eth',
      twitter: '#'
    },
    {
      img: '/profile-pics/tommyoloffson.png',
      name: 'tommyoloffson',
      twitter: '#'
    },
  ]

class Section4 extends React.Component {
  render() {
    return (
      <Flex flexDir='column' justifyContent='center' alignItems='center'>
        <Text 
          fontSize='4xl'
          wordWrap='break-word'
          textAlign='center'
          fontWeight={700}
          marginTop={{ base: 39, lg: 25 }}
          width={{ base: '80%', lg: '60%' }}>
          {'Treasury multi-sig owners'.toUpperCase()}
        </Text>
        <div className='banner-underline'>&nbsp;</div>

        <Flex
          flexWrap='wrap'
          flexDir='row'
          justifyContent='center'
          alignItems='space-between'
          rowGap='2vh'>
          {MULTI_SIG_OWNERS.map(_multiSigOwner => {
            return (
              <Flex
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                width={{ base: '50%', lg: '30%'}}
                key={_multiSigOwner.name}
                rowGap='1.5vh'>
                <Box className='shadow'>
                  <Image
                    src={_multiSigOwner.img}
                    alt={_multiSigOwner.name}
                    width={200}
                    height={200}
                  />
                </Box>

                <Flex
                  flexDir='row'
                  justifyContent='space-between'
                  alignItems='center'>
                  <Text fontSize='2xl' style={{ marginRight: 8 }}>
                    {_multiSigOwner.name}
                  </Text>
                  <Flex
                    flexDir='row'
                    justifyContent='center'
                    alignItems='center'
                    className='twitter-circle'
                    href={_multiSigOwner.twitter}>
                    <Image
                      src='/icons/twitter.png'
                      alt='twitter'
                      width={10}
                      height={10}
                    />
                  </Flex>
                </Flex>
              </Flex>
            )
          })}
        </Flex>

        <Text fontSize='4xl' className='banner-text'>
          {'Grants committee members'.toUpperCase()}
        </Text>
        <div className='banner-underline'>&nbsp;</div>

        <Flex
          flexWrap='wrap'
          flexDir='row'
          justifyContent='center'
          alignItems='space-between'
          rowGap='2vh'>
          {GRANT_COMMITTEE_MEMBERS.map(_multiSigOwner => {
            return (
              <Flex
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                width={{ base: '50%', lg: '30%'}}
                key={_multiSigOwner.name}
                rowGap='1.5vh'>
                <Box className='shadow'>
                  <Image
                    src={_multiSigOwner.img}
                    alt={_multiSigOwner.name}
                    width={200}
                    height={200}
                  />
                </Box>

                <Flex
                  flexDir='row'
                  justifyContent='space-between'
                  alignItems='center'>
                  <Text fontSize='2xl' style={{ marginRight: 8 }}>
                    {_multiSigOwner.name}
                  </Text>
                  <Flex
                    flexDir='row'
                    justifyContent='center'
                    alignItems='center'
                    className='twitter-circle'
                    href={_multiSigOwner.twitter}>
                    <Image
                      src='/icons/twitter.png'
                      alt='twitter'
                      width={10}
                      height={10}
                    />
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

export default Section4;
