import React from 'react'
import Image from 'next/image'

import {
  Stack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
} from '@chakra-ui/react'

import Card from './card'

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

class Section1 extends React.Component {
  render() {
    return (
      <Stack
        className='section-container'
        flexDir='column'
        spacing={40}
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

        <Box className='banner-underline'>&nbsp;</Box>

        <InputGroup width='20%' className='join-us-group'>
          <Input
            // pr='4.5rem'
            type='text'
            placeholder={`We're Headed West`}
          />
          <InputRightElement width='40%'>
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

        <Box className='banner-underline'>&nbsp;</Box>

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

        <Box className='banner-underline'>&nbsp;</Box>

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
          <div>
            <Text fontSize='4xl' color={'black'} fontWeight={700}>
              Onboarding 1 billion people, Minting 1 billion BANK tokens
            </Text>
          </div>
          <div>
            <Text fontSize='4xl' color={'black'} fontWeight={700}>
              Buy Bank
            </Text>
          </div>
        </Box>
      </Stack>
    )
  }
}

export default Section1
