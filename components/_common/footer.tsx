import React from 'react'
import Image from 'next/image'

import { Grid, Box, Flex, Text, Link } from '@chakra-ui/react'

const SOCIALS = [
  {
    img: '/icons/medium.png',
    alt: 'medium',
    href: 'https://medium.com/bankless-dao',
  },
  {
    img: '/icons/mirror.png',
    alt: 'mirror',
    href: 'https://banklessdao.mirror.xyz/',
  },
  {
    img: '/icons/union.png',
    alt: 'union',
    href: '#',
  },
  {
    img: '/icons/twitter.png',
    alt: 'twitter',
    href: 'https://twitter.com/banklessDAO',
  },
  {
    img: '/icons/discord.png',
    alt: 'discord',
    href: 'https://discord.com/invite/bankless',
  },
  {
    img: '/icons/notion.png',
    alt: 'notion',
    href: 'https://bankless.notion.site/bankless/BanklessDAO-82ba81e7da1c42adb7c4ab67a4f22e8f',
  },
  {
    img: '/icons/snapshot.png',
    alt: 'snapshot',
    href: 'https://snapshot.org/#/banklessvault.eth',
  },
  {
    img: '/icons/etherscan-logo.png',
    alt: 'etherscan',
    href: 'https://etherscan.io/token/0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198',
  },
  {
    img: '/icons/instagram.png',
    alt: 'instagram',
    href: 'https://www.instagram.com/banklessdao',
  },
  {
    img: '/icons/dune.png',
    alt: 'alt',
    href: 'https://dune.xyz/paulapivat/Bankless-DAO-Tipping-Economy',
  },
]

const LINKS = [
  {
    text: 'Join Olympus Pro',
    href: 'https://pro.olympusdao.finance/#/bond',
  },
  {
    text: 'BANK',
    href: 'https://etherscan.io/token/0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198',
  },
  {
    text: 'Wiki',
    href: 'https://dyor-crypto.fandom.com/wiki/Bankless_DAO_(BANK)',
  },
  {
    text: 'Privacy',
    href: 'https://forum.bankless.community/privacy',
  },
  {
    text: 'Forum',
    href: 'https://forum.bankless.community/',
  },
  {
    text: 'Github',
    href: 'https://github.com/BanklessDAO',
  },
  {
    text: 'Vote',
    href: 'https://snapshot.org/#/banklessvault.eth',
  },
  {
    text: 'TwitchTV',
    href: 'https://www.twitch.tv/banklessdao',
  },
]

class Footer extends React.Component {
  render() {
    return (
      <Flex flexDirection='column' justifyContent='center' alignItems='center'>
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={{ base: 2, md: 6 }}
          width='80%'
          borderTop='1px solid red'
          marginTop={{ base: 8, lg: 16 }}
          paddingY={{ base: 8, lg: 8 }}
          paddingX={{ base: 4, lg: 8 }}>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems={{ base: 'center', md: 'start' }}
            rowGap={4}>
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

            <Flex justifyContent='space-between' marginTop={{ base: 0, lg: 4 }}>
              {SOCIALS.map((_social, idx) => {
                return (
                  <Link
                    href={_social.href}
                    target='_blank'
                    key={`social-${idx}`}
                    mx={1}
                    my={2}>
                    <Image
                      src={_social.img}
                      alt={_social.alt}
                      width={30}
                      height={30}
                    />
                  </Link>
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
                  <Link
                    href={_link.href}
                    target='_blank'
                    key={`link-${idx}`}
                    fontSize={{ base: 'md', md: '2xl' }}>
                    {_link.text}
                  </Link>
                )
              })}
            </Grid>
          </Box>
        </Grid>
        <Text fontSize='m' color='rgba(255, 255, 255, 0.56);' marginY={2}>
          GoBankless © 2022. All Rights Reserved.
        </Text>
      </Flex>
    )
  }
}

export default Footer
