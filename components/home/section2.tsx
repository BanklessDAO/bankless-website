import React from 'react'

import { Flex, Text, Grid } from '@chakra-ui/react'

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

class Section2 extends React.Component {
  render() {
    return (
      <Flex flexDir='column' justifyContent='center' alignItems='center'>
        <Text fontSize='4xl' className='banner-text'>
          {'We take a decentralized approach to:'.toUpperCase()}
        </Text>

        <div className='banner-underline'>&nbsp;</div>

        <Grid 
          templateColumns={{base: '1fr', lg: '1fr 1fr'}}
          gridColumnGap={{base: 8}}
          gridRowGap={{base: 5, lg: 8}}>
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
        </Grid>
      </Flex>
    )
  }
}

export default Section2
