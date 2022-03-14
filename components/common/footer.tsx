import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'

import { Grid, Box, Flex, Text, Link } from '@chakra-ui/react'

const SOCIALS = [
  {
    img: '/icons/medium.png',
    alt: 'medium',
    href: '#',
  },
  {
    img: '/icons/mirror.png',
    alt: 'mirror',
    href: '#',
  },
  {
    img: '/icons/union.png',
    alt: 'union',
    href: '#',
  },
  {
    img: '/icons/twitter.png',
    alt: 'twitter',
    href: '#',
  },
  {
    img: '/icons/discord.png',
    alt: 'discord',
    href: '#',
  },
  {
    img: '/icons/notion.png',
    alt: 'notion',
    href: '#',
  },
  {
    img: '/icons/icon-7.png',
    alt: 'alt',
    href: '#',
  },
  {
    img: '/icons/path.png',
    alt: 'path',
    href: '#',
  },
  {
    img: '/icons/instagram.png',
    alt: 'instagram',
    href: '#',
  },
  {
    img: '/icons/icon-10.png',
    alt: 'alt',
    href: '#',
  },
]

const LINKS = [
  {
    text: 'Join Olympus Pro',
    href: '#',
  },
  {
    text: 'BANK',
    href: '#',
  },
  {
    text: 'Wiki',
    href: '#',
  },
  {
    text: 'Privacy',
    href: '#',
  },
  {
    text: 'Forum',
    href: '#',
  },
  {
    text: 'Github',
    href: '#',
  },
  {
    text: 'Vote',
    href: '#',
  },
  {
    text: 'TwitchTV',
    href: '#',
  },
]

class Footer extends React.Component {
  render() {
    return (
      <Flex flexDirection='column' justifyContent='center' alignItems='center'>
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={6}
          width='80%'
          borderTop='1px solid red'
          marginTop={{ base: 8, lg: 16 }}
          padding={{ base: 4, lg: 8 }}>
            
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'>
            <Image
              src='/icons/bankless-square.jpg'
              objectFit='contain'
              height={150}
              width={150}
              alt='bankless-logo'
            />

            <Text fontSize='xl'>
              A decentralized autonomous organization that acts as a steward of
              the Bankless Movement progressing the world towards a future of
              greater freedom.
            </Text>

            <Flex justifyContent='space-between' marginTop={{ base: 0, lg: 4}}>
              {SOCIALS.map((_social, idx) => {
                return (
                  <Box key={`social-${idx}`} margin={2}>
                    <Image
                      src={_social.img}
                      alt={_social.alt}
                      width={20}
                      height={20}
                    />
                  </Box>
                )
              })}
            </Flex>
          </Flex>

          <Box marginTop={{ base: 8, lg: 24 }}>
            <Grid
              gridTemplateColumns='1fr 1fr'
              rowGap='2vh'
              columnGap={12}
              paddingLeft={{ base: 0, lg: 8 }}
              paddingTop={{ base: 4, lg: 12 }}
              textAlign={{ base: 'center', lg: 'left' }}>
              {LINKS.map((_link, idx) => {
                return (
                  <NextLink href={_link.href} key={`link-${idx}`}>
                    <Link fontSize='2xl'>{_link.text}</Link>
                  </NextLink>
                )
              })}
            </Grid>
          </Box>
        </Grid>

        <Text
          fontSize='m'
          color='rgba(255, 255, 255, 0.56);'
          style={{ marginTop: '8vh' }}>
          GoBankless © 2022. All Rights Reserved.
        </Text>
      </Flex>
    )
  }
}

export default Footer
