import React from 'react'
import Image from 'next/image'

import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
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

        <div className='banner-underline'>&nbsp;</div>

        <div className='card-container'>
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
        </div>

        <Text fontSize='4xl' className='banner-text'>
          {'Community-owned and operated through the:'.toUpperCase()}
        </Text>

        <div className='banner-underline'>&nbsp;</div>

        <div className='buy-bank'>
          <div className='buy-bank-section'>
            <div>
              <Image
                src='/icons/bankless-coin.png'
                alt='bankless-coin'
                layout='fill'
                objectFit='contain'
              />
            </div>
            <div>
              <Text mb='-60px' fontSize='4xl' fontWeight={700}>
                BANK Token
              </Text>
            </div>
          </div>
          <div className='buy-bank-section'>
            <div>
              <Image
                src='/icons/ethereum-icon.png'
                alt='ethereum-icon'
                layout='fill'
                objectFit='contain'
              />
            </div>
            <Text mb='-60px' fontSize='4xl' fontWeight={700}>
              Ethereum Blockchain
            </Text>
          </div>
        </div>

        <Text
          fontSize='4xl'
          color='rgba(255, 255, 255, 0.09)'
          className='spaced-text'>
          the most widely-held social token
        </Text>
      </Flex>
    )
  }
}

export default Section1
