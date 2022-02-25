import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'

import { Grid, Box, Flex, Text, Link, Spacer } from '@chakra-ui/react'

const SOCIALS = [
    {
        img: '/icons/medium.png',
        alt: 'medium',
        href: '#'
    },
    {
        img: '/icons/mirror.png',
        alt: 'mirror',
        href: '#'
    },
    {
        img: '/icons/union.png',
        alt: 'union',
        href: '#'
    },
    {
        img: '/icons/twitter.png',
        alt: 'twitter',
        href: '#'
    },
    {
        img: '/icons/discord.png',
        alt: 'discord',
        href: '#'
    },
    {
        img: '/icons/notion.png',
        alt: 'notion',
        href: '#'
    },
    {
        img: '/icons/icon-7.png',
        alt: 'alt',
        href: '#'
    },
    {
        img: '/icons/path.png',
        alt: 'path',
        href: '#'
    },
    {
        img: '/icons/instagram.png',
        alt: 'instagram',
        href: '#'
    },
    {
        img: '/icons/icon-10.png',
        alt: 'alt',
        href: '#'
    },
]

const LINKS = [
    {
        text: 'Join Olympus Pro',
        href: '#'
    },
    {
        text: 'BANK',
        href: '#'
    },
    {
        text: 'Wiki',
        href: '#'
    },
    {
        text: 'Privacy',
        href: '#'
    },
    {
        text: 'Forum',
        href: '#'
    },
    {
        text: 'Github',
        href: '#'
    },
    {
        text: 'Vote',
        href: '#'
    },
    {
        text: 'TwitchTV',
        href: '#'
    },
]

class Footer extends React.Component {
    render() {
        return (
          <Grid
            templateColumns='repeat(2, 1fr)'
            gap={6}
            className='footer-container'>
            <Box style={{width: '70%'}}>
              <Image
                src='/icons/bankless-square.jpg'
                height={150}
                width={150}
                alt='bankless-logo'
              />

              <Text fontSize='xl' style={{marginTop: '2vh'}}>
                A decentralized autonomous organization that acts as a steward
                of the Bankless Movement progressing the world towards a future
                of greater freedom.
              </Text>

              <Flex 
                justifyContent='space-between'
                style={{marginTop: '5vh'}}>
                {SOCIALS.map((_social, idx) => {
                  return (
                    <Box key={`social-${idx}`}>
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

              <Text fontSize='m' color='rgba(255, 255, 255, 0.56);' style={{marginTop: '8vh'}}>
                GoBankless © 2022. All Rights Reserved.
              </Text>
            </Box>

            <Box>
              <Grid gridTemplateColumns='1fr 1fr' rowGap='2vh' columnGap={12} className='footer-right'>
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
        )
    }

}

export default Footer