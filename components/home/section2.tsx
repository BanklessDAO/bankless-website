import React from 'react'

import { Flex, Text, Grid } from '@chakra-ui/react'

import Card from './card'
import Underline from 'components/common/underline'

const CARDS = [
    {
      img: '/images/projects.png',
      title: 'Projects',
      text: 'Projects enable Guilds and bDAO members to collaborate and scale the Bankless movement',
      href: '/about-us/projects',
    },
    {
      img: '/images/guilds.png',
      title: 'Guilds',
      text: 'Guilds are the way we organize our contributors. There are 13 guilds within bDAO.',
      href: '/about-us/guilds',
    },
    {
      img: '/images/governance.jpg',
      title: 'Governace',
      text: 'At BanklessDAO, all decisions regarding governance, treasury, projects, and proposals are made through a democratic process.',
      href: '/about-us/governance',
    },
    {
      img: '/images/coming-home.jpg',
      title: 'Coming Home',
      text: 'Creating a social homebase for artists, thought-leaders, builders, scholars, and innovators in Web3.',
      href: '#',
      pending: true
    },
  ]

class Section2 extends React.Component {
  render() {
    return (
      <Flex flexDir='column' justifyContent='center' alignItems='center'>

        <Text fontWeight={700} fontSize='4xl' textAlign='center'>
          {'We take a decentralized approach to:'.toUpperCase()}
        </Text>

        <Underline />

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
                pending={_card.pending}
              />
            )
          })}
        </Grid>
      </Flex>
    )
  }
}

export default Section2
