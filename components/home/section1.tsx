import React from 'react'
import Image from 'next/image'

import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
} from '@chakra-ui/react'

import Card from './card'
import { m } from 'framer-motion'

const CARDS = [
  {
    img: '/images/media.jpg',
    title: 'Media',
    text: 'Producing cutting-edge written, visual, and audio content',
    href: '#',
  },
  {
    img: '/images/consulting.jpg',
    title: 'Consulting',
    text: 'Providing consulting services for other DAOs and Web3-native companies.',
    href: '#',
  },
  {
    img: '/images/dao-tooling.jpg',
    title: 'DAO Tooling',
    text: 'Shipping products and services that are changing the future of work.',
    href: '#',
  },
  {
    img: '/images/coming-home.jpg',
    title: 'Coming Home',
    text: 'Creating a social homebase for artists, thought-leaders, builders, scholars, and innovators in Web3.',
    href: '#',
  },
]

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

class Section1 extends React.Component {
  render() {
    return (
      <Flex
        className='section-container'
        flexDir='column'
        justifyContent='center'
        alignItems='center'>
        <Image
          src='/icons/bankless-square.jpg'
          height={250}
          width={250}
          alt='bankless-logo'
        />
        <Text fontSize='6xl' className='banner-text'>
          Media and Social DAO Onboarding 1 billion people to crypto
        </Text>

        <div className='banner-underline'>&nbsp;</div>

        <InputGroup width={400} className='join-us-group'>
          <Input
            // pr='4.5rem'
            type='text'
            placeholder={`We're Headed West`}
          />
          <InputRightElement width={150}>
            <Button
              size='sm'
              width='100%'
              margin='8px'
              bg='#FF1A1A'
              onClick={() => null}>
              Join Us
            </Button>
          </InputRightElement>
        </InputGroup>

        <Image
          src='https://s3-alpha-sig.figma.com/img/0d4d/fb58/54a73a14f7a41a09c96399acb634a29d?Expires=1646006400&Signature=IH8AXlx7ICC~PgYQIzFVNAUpOIeST-pImvgQEKnewMIn-LF1s-E0Y6rCAFltjbjwb1u4JBgVh8lvMzIxcZ0nEvKHM58qB4JxXR~naGC8AntEZoOqLS-1bIfqrsFEvkMs-uRzCeHoJKH5YBtTdRD6-rRF7ZlmUqkB0az11R3jUG4FnlKhIEvyoZAyGbIyF-xxZXIJWDBgfx5OAdo44Iv1IOuKq7XG80Bh-uSBPCgo-UjJ-pbJY942LLAxmmo8uSWmTHPMwnRl8326sANGRDL~YjN-~fvOAQTEf3bGlfiSEp38xCGcQUmT8QHOS79N9dLiLhpabmJQYLzKgQUnBiyrlQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          height='600'
          width='800'
          alt='bankless-gif'
        />

        <Text fontSize='4xl' className='banner-text'>
          {'We take a decentralized approach to:'.toUpperCase()}
        </Text>

        <div className='banner-underline'>&nbsp;</div>

        <Box className='card-container'>
          {CARDS.map((_card, idx) => {
            return (
              <Card
                key={`card-${idx}`}
                img={_card.img}
                title={_card.title}
                text={_card.text}
                href={_card.href}
              />
            )
          })}
        </Box>

        <Text fontSize='4xl' className='banner-text'>
          {'Community-owned and operated through the:'.toUpperCase()}
        </Text>

        <div className='banner-underline'>&nbsp;</div>

        <Box className='buy-bank'>
          <Box className='buy-bank-section'>
            <Box>
              <Image
                src='/icons/bankless-coin.png'
                alt='bankless-coin'
                height={200}
                width={200}
                objectFit='contain'
              />
            </Box>
            <Box>
              <Text fontSize='4xl' fontWeight={700}>
                BANK Token
              </Text>
            </Box>
          </Box>
          <Box className='buy-bank-section'>
            <Box>
              <Image
                src='/icons/ethereum-icon.png'
                alt='ethereum-icon'
                height={200}
                width={200}
                objectFit='contain'
              />
            </Box>
            <Text fontSize='4xl' fontWeight={700}>
              Ethereum Blockchain
            </Text>
          </Box>
        </Box>

        <Box className='bank-banner'>
          <Box>
            <Text fontSize='3xl' color={'black'} fontWeight={700}>
              Onboarding 1 billion people, Minting 1 billion BANK tokens
            </Text>
          </Box>
          <Box display={'flex'}>
            <Button
              size='lg'
              width='30%'
              margin='8px'
              bg='#FF1A1A'
              onClick={() => null}>
              Buy Bank
            </Button>
            <Button
              size='lg'
              width='70%'
              margin='8px'
              bg='#FFFFFF'
              border='1px solid #FF1A1A'
              color='#FF1A1A'
              onClick={() => null}>
              BANK TOKEN LEGAL ASSESSMENT
            </Button>
          </Box>
        </Box>

        <Box className='founders'>
          <Flex
            flexDir='row'
            justifyContent='center'
            alignItems='space-between'>
            <Box width='20%'>
              <Box className='shadow-left'>
                <Image
                  src='/profile-pics/david-hoffman.png'
                  height={150}
                  width={150}
                  alt='david-hoffman'
                />
              </Box>
            </Box>
            <Box width='20%'>
              <Box className='shadow-right'>
                <Image
                  src='/profile-pics/ryan-sean-adams.png'
                  height={150}
                  width={150}
                  alt='ryan-sean-adams'
                />
              </Box>
            </Box>
            <Box width='60%'>
              <Text fontSize='3xl' color='rgba(255, 255, 255, 0.61)'>
                BanklessDAO was founded by{' '}
                <b style={{ color: 'white' }}>David Hoffman</b> and{' '}
                <b style={{ color: 'white' }}>Ryan Sean Adams</b> on May 4th,
                2021, when they airdropped 35,000 BANK tokens to each Bankless
                premium subscriber
              </Text>
            </Box>
          </Flex>
          <Box className='spacer'></Box>
          <Flex
            flexDir='row'
            justifyContent='center'
            alignItems='space-between'>
            <Text fontSize='xl' color='rgba(255, 255, 255, 0.61)'>
              Following the true ethos of decentralization, they stepped back
              and let the DAO take shape. While their media company, Bankless
              LLC, continues to operate as its own media node, the Bankless
              brand is propagated through the DAO and its sub-DAOs. Now, the
              Bankless ecosystem as a whole creates user-friendly onramps for
              people to discover decentralized financial technologies through
              education, media and culture.
            </Text>
          </Flex>
        </Box>

        <Text fontSize='4xl' className='banner-text'>
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
                width='30%'
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
                  alignItems='center'
                  >
                  <Text fontSize='2xl' style={{marginRight: 8}}>{_multiSigOwner.name}</Text>
                  <Flex
                    flexDir='row'
                    justifyContent='center'
                    alignItems='center'
                    className='twitter-circle'
                    href={_multiSigOwner.twitter}
                    >
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
                width='30%'
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
                  alignItems='center'
                  >
                  <Text fontSize='2xl' style={{marginRight: 8}}>{_multiSigOwner.name}</Text>
                  <Flex
                    flexDir='row'
                    justifyContent='center'
                    alignItems='center'
                    className='twitter-circle'
                    href={_multiSigOwner.twitter}
                    >
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

export default Section1
