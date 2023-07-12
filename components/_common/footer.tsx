import React from 'react'
import { Image } from '@chakra-ui/react'

import { Grid, Box, Flex, Text, Link } from '@chakra-ui/react'

const SOCIALS = [
  {
    img: '/icons/facebook.png',
    alt: 'facebook',
    href: 'https://www.facebook.com/people/Bankless-DAO/100086325162724/',
  },
  {
    img: '/icons/tiktok.png',
    alt: 'tiktok',
    href: 'https://vm.tiktok.com/ZMNSvBj2H/',
  },
  {
    img: '/icons/telegram.png',
    alt: 'telegram',
    href: 'https://t.me/BanklessDAO',
  },
  {
    img: '/icons/youtube.png',
    alt: 'youtube',
    href: 'https://www.youtube.com/channel/UCik2oWalCO3qpiGoMpl-c1g',
  },
  {
    img: '/icons/threads.png',
    alt: 'threads',
    href: 'https://www.threads.net/@bankless_dao',
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
    img: '/icons/instagram.png',
    alt: 'instagram',
    href: 'https://www.instagram.com/bankless_dao/',
  }
]

const LINKS = [
  {
    text: 'Dune',
    href: 'https://dune.xyz/paulapivat/Bankless-DAO-Tipping-Economy',
  },
  {
    text: '$BANK',
    href: 'https://etherscan.io/token/0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198',
  },
  {
    text: 'Notion',
    href: 'https://bankless.notion.site/bankless/BanklessDAO-82ba81e7da1c42adb7c4ab67a4f22e8f',
  },
  {
    text: 'Medium',
    href: 'https://medium.com/bankless-dao',
  },
  {
    text: 'Mirror',
    href: 'https://banklessdao.mirror.xyz/',
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
  {
    text: 'Privacy',
    href: 'https://forum.bankless.community/privacy',
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
          borderTop='1px solid white'
          marginTop={{ base: 8, lg: 16 }}
          paddingY={{ base: 8, lg: 8 }}
          paddingX={{ base: 4, lg: 8 }}
        >
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems={{ base: 'center', md: 'start' }}
            rowGap={1}
          >
            <Image
                src={'images/logo.png'}
                alt={'BanklessDAO logo'}
                height={['50px', '75px']}
            />
            <Text fontSize='xl' textAlign={{ sm: 'center', md: 'left'}} color={'gray'}>
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
                    my={2}
                  >
                    <Image
                      src={_social.img}
                      alt={_social.alt}
                      height={['20px', '32px']}
                    />
                  </Link>
                )
              })}
            </Flex>
          </Flex>
          <Box marginTop={{ base: 8, lg: 0 }}>
            <Grid
              gridTemplateColumns='1fr 1fr'
              rowGap='1rem'
              columnGap={12}
              paddingLeft={{ base: 0, lg: 8 }}
              paddingTop={{ base: 4, lg: 0 }}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              {LINKS.map((_link, idx) => {
                return (
                  <Link
                    href={_link.href}
                    target='_blank'
                    key={`link-${idx}`}
                      fontWeight={'normal'}
                    fontSize={{ base: 'md', md: 'lg' }}
                  >
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
