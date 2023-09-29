import React from 'react'

import { Flex, Text, Grid } from '@chakra-ui/react'

import Card from './card'
import Underline from 'components/_common/underline'

const CARDS = [
  {
    img: '/bankless-website/images/coming-home.jpg',
    title: 'Departments',
    text: 'Departments are operation-critical units of BanklessDAO without which the DAO cannot function properly.',
    href: '/about-us/departments',
  },
  {
    img: '/bankless-website/images/guilds.png',
    title: 'Guilds',
    text: 'Guilds are the way we organize our contributors. There are 13 guilds within bDAO.',
    href: '/about-us/guilds',
  },
  {
    img: '/bankless-website/images/projects.png',
    title: 'Projects',
    text: 'Projects enable Guilds and bDAO members to collaborate and scale the Bankless movement',
    href: '/about-us/projects',
  },
  {
    img: '/bankless-website/images/governance.jpg',
    title: 'Governance',
    text: 'At BanklessDAO, all decisions regarding governance, treasury, projects, and proposals are made through a democratic process.',
    href: '/about-us/governance',
  },
]

class Section2 extends React.Component {
  render() {
    return (
      <Flex
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        w='100%'
      >
        <Text
          fontWeight={700}
          fontSize={{ base: '1.2rem', md: '3xl' }}
          mt='4rem'
          textAlign='center'>
          {'We take a decentralized approach to:'}
        </Text>

        <Underline />

        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          mt='3rem'
          gridColumnGap={{ base: '2rem' }}
          gridRowGap={{ base: '2rem', lg: '2rem' }}>
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
