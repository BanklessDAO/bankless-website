import React from 'react'

import { Flex, Text, Box, Image, Container } from '@chakra-ui/react'
import Link from 'next/link'

const MULTI_SIG_OWNERS = [
  {
    img: '/bankless-website/public/profile-pics/kouros.jpg',
    name: 'Kouros',
    twitter: 'https://twitter.com/davidcoleto',
  },
  {
    img: '/bankless-website/public/profile-pics/grendel.jpg',
    name: 'Grendel',
    twitter: 'https://twitter.com/GrendelMarco',
  },
  {
    img: '/bankless-website/public/profile-pics/icedcool.jpg',
    name: 'IcedCool',
    twitter: 'https://twitter.com/icedcool_eth',
  },
  {
    img: '/bankless-website/public/profile-pics/chuck.jpg',
    name: 'Chuck',
    twitter: 'https://twitter.com/mr_cgc',
  },
  {
    img: '/bankless-website/public/profile-pics/montgomery.jpg',
    name: 'Montgomery',
    twitter: 'https://twitter.com/WPMonty',
  },
  {
    img: '/bankless-website/public/profile-pics/lion917.jpg',
    name: 'Lion917',
    twitter: 'https://twitter.com/lion917_eth',
  },
  {
    img: '/bankless-website/public/profile-pics/links.jpg',
    name: 'Links',
    twitter: 'https://twitter.com/almithani',
  },
]

const GRANT_COMMITTEE_MEMBERS = [
  {
    img: '/bankless-website/public/profile-pics/kouros.jpg',
    name: 'Kouros',
    twitter: 'https://twitter.com/davidcoleto',
  },
  {
    img: '/bankless-website/public/profile-pics/0xlucas.jpg',
    name: '0xLucas',
    twitter: 'https://twitter.com/0x_Lucas',
  },
  {
    img: '/bankless-website/public/profile-pics/aboveaveragejoe.jpg',
    name: 'AboveAverageJoe',
    twitter: 'https://twitter.com/Abv_Avg_Joe',
  },
  {
    img: '/bankless-website/public/profile-pics/grendel.jpg',
    name: 'Grendel',
    twitter: 'https://twitter.com/GrendelMarco',
  },
  {
    img: '/bankless-website/public/profile-pics/frogmonkee.jpg',
    name: 'FrogMonkee',
    twitter: 'https://twitter.com/frogmonkee',
  },
  {
    img: '/bankless-website/public/profile-pics/icedcool.jpg',
    name: 'IcedCool',
    twitter: 'https://twitter.com/icedcool_eth',
  },
  {
    img: '/bankless-website/public/profile-pics/redvan.jpg',
    name: 'RedVan',
    twitter: 'https://mobile.twitter.com/0xredvan',
  },
]

class Section4 extends React.Component {
  render() {
    return (
      <Flex
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        my='1rem'
        w='100vw'
      >
        <Text
          fontSize={{ base: '1.5rem', md: '4xl' }}
          wordBreak={'break-word'}
          textAlign='center'
          fontWeight={700}
          marginTop={{ base: 39, lg: 25 }}
          width={{ base: '100%', lg: '60%' }}
        >
          {'Treasury multi-sig owners'.toUpperCase()}
        </Text>
        <Box w='80vw'>
          <Container
            display={{ base: 'none', md: 'block' }}
            filter='blur(2px)'
            mt={4}
            mb={{ base: 4, md: 12 }}
            fontSize='16px'
            lineHeight='6px'
            background='linear-gradient(
          91.88deg,
          #D02128 44.79%,
          rgba(140, 29, 207, 0) 101.77%
        )'
          >
            &nbsp;
          </Container>
          <Container
            display={{ base: 'block', md: 'none' }}
            filter='blur(6px)'
            mt={6}
            mb={{ base: 12, md: 12 }}
            fontSize='8px'
            lineHeight='10px'
            background='linear-gradient(
          91.88deg,
          #D02128 30.79%,
          rgba(140, 29, 207, 0.5) 101.77%
        )'
          >
            &nbsp;
          </Container>
        </Box>

        <Flex
          flexWrap='wrap'
          flexDir='row'
          justifyContent='center'
          alignItems='space-between'
          my='1rem'
          rowGap={8}
        >
          {MULTI_SIG_OWNERS.map(_multiSigOwner => {
            return (
              <Flex
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                width={{ base: '30%' }}
                key={_multiSigOwner.name}
                rowGap='1.5vh'
              >
                <Box
                  borderRadius='100%'
                  width='fit-content'
                  boxShadow='-3px 1px 15px #D02128'
                >
                  <Image
                    borderRadius='100%'
                    src={_multiSigOwner.img}
                    alt={_multiSigOwner.name}
                    width={{ base: '80px', sm: '120px', md: '200px' }}
                    height={{ base: '80px', sm: '120px', md: '200px' }}
                  />
                </Box>

                <Link href={_multiSigOwner.twitter} passHref={true}>
                  <Flex
                    flexDir='row'
                    justifyContent='space-between'
                    alignItems='center'
                    cursor={'pointer'}
                    pt={4}
                  >
                    <Text
                      fontSize={{ base: '0.8rem', sm: 'xl', md: '2xl' }}
                      style={{ marginRight: 8 }}
                    >
                      {_multiSigOwner.name}
                    </Text>
                    <Flex
                      flexDir='row'
                      justifyContent='center'
                      alignItems='center'
                      backgroundColor='#1da1f2'
                      borderRadius='100%'
                      w={{ base: '15px', sm: '20px' }}
                      h={{ base: '15px', sm: '20px' }}
                    >
                      <Image
                        src='/bankless-website/public/icons/twitter.png'
                        alt='twitter'
                        w={{ base: '8px', sm: '10px' }}
                        h={{ base: '8px', sm: '10px' }}
                      />
                    </Flex>
                  </Flex>
                </Link>
              </Flex>
            )
          })}
        </Flex>

        <Text
          fontSize={{ base: '1.5rem', md: '4xl' }}
          wordBreak={'break-word'}
          textAlign='center'
          display={{ base: 'none', md: 'block' }}
          fontWeight={700}
          marginTop={{ base: 39, lg: 25 }}
          width={{ base: '100%', lg: '60%' }}
        >
          {'Grants committee members'.toUpperCase()}
        </Text>
        <Box w='80vw'>
          <Container
            display={{ base: 'none', md: 'block' }}
            filter='blur(2px)'
            mt={4}
            mb={{ base: 4, md: 12 }}
            fontSize='16px'
            lineHeight='6px'
            background='linear-gradient(
          91.88deg,
          #D02128 44.79%,
          rgba(140, 29, 207, 0) 101.77%
        )'
          >
            &nbsp;
          </Container>
          <Container
            // display={{ base: 'block', md: 'none' }}
            display={{ base: 'none' }}
            filter='blur(6px)'
            mt={6}
            mb={{ base: 12, md: 12 }}
            fontSize='8px'
            lineHeight='10px'
            background='linear-gradient(
          91.88deg,
          #D02128 30.79%,
          rgba(140, 29, 207, 0.5) 101.77%
        )'
          >
            &nbsp;
          </Container>
        </Box>

        <Flex
          flexWrap='wrap'
          flexDir='row'
          justifyContent='center'
          alignItems='space-between'
          my='1rem'
          display={{ base: 'none', md: 'flex' }}
          rowGap={8}
        >
          {GRANT_COMMITTEE_MEMBERS.map(_multiSigOwner => {
            return (
              <Flex
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                width={{ base: '30%' }}
                key={_multiSigOwner.name}
                rowGap='1.5vh'
              >
                <Box
                  borderRadius='100%'
                  width='fit-content'
                  boxShadow='-3px 1px 15px #D02128'
                >
                  <Image
                    borderRadius='100%'
                    src={_multiSigOwner.img}
                    alt={_multiSigOwner.name}
                    width={{ base: '90px', sm: '120px', md: '200px' }}
                    height={{ base: '90px', sm: '120px', md: '200px' }}
                  />
                </Box>

                <Flex
                  flexDir='row'
                  justifyContent='space-between'
                  alignItems='center'
                  pt={4}
                >
                  <Text
                    fontSize={{ base: 'sm', sm: 'xl', md: '2xl' }}
                    style={{ marginRight: 8 }}
                  >
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
                        src='/bankless-website/public/icons/twitter.png'
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
