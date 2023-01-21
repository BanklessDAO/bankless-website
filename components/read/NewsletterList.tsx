import React from 'react'
import { ulid } from 'ulid'
import Link from 'next/link'
import { HStack, Text, Grid, Box } from '@chakra-ui/react'
import Underline from 'components/_common/underline'
import { NewsletterCard } from './NewsletterCard'

export const NewsletterList: React.FC = () => {
  const newsletters = [
    {
      title: 'The Weekly Rollup',
      text: 'Weekly summary of everything that happens in bDAO. It’s the place to stay updated with the DAO.',
      href: 'https://banklessdao.substack.com/s/weekly-rollup',
      rowSpan: 2,
      colSpan: 1,
    },
    {
      title: 'Decentralized Arts',
      text: 'Weekly Crypto Art and NFT newsletter.',
      href: 'https://banklessdao.substack.com/s/decentralized-art',
      rowSpan: 1,
      colSpan: 1,
    },
    {
      title: 'Decentralized Law',
      text: 'The premier legal newsletter in the crypto space, publishing cutting-edge legal scholarship twice a month.',
      href: 'https://banklessdao.substack.com/s/decentralized-law',
      rowSpan: 3,
      colSpan: 1,
      image: {
        src: '/images/read/token.png',
        alt: 'token 3d graphic',
      },
    },
    {
      title: 'State of the DAOs',
      text: 'The high-signal-low-noise DAO ecosystem newsletter.',
      href: 'https://banklessdao.substack.com/s/state-of-the-daos',
      rowSpan: 1,
      colSpan: 1,
    },
    {
      title: 'DeFi Download',
      text: 'Your one stop shop for  DeFi education, project announcements, and tokenomics tutorials.',
      href: 'https://banklessdao.substack.com/s/defi-download',
      rowSpan: 1,
      colSpan: 2,
    },
  ]

  return (
    <HStack
      flexDir='column'
      justifyContent='start'
      alignItems='start'
      rowGap={{ base: 2, md: 4 }}
      pt={{base: '4rem', md:'8rem'}}
      pos='relative'
      sx={{
        '& > ul': {
          margin: '0 !important',
        },
      }}>
      <Box zIndex={1} m={0}>
        <Text
          fontWeight={700}
          fontSize={{base: '4xl', md:'6xl'}}
          textAlign='center'
          maxW={750}
          fontFamily='Clear Sans'>
          Newsletters
        </Text>
        <Underline />
      </Box>

      <Grid
        as='ul'
        gridTemplateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
        templateRows={{ base: 'auto', lg: 'repeat(3, 1fr)' }}
        gap={4}
        zIndex={1}
        m={0}
        p={0}
        w='100%'
        h='100%'
        pt={{base: '3rem', md: 0}}
        sx={{ margin: 0 }}>
        {newsletters.map(newsletter => (
          <NewsletterCard {...newsletter} key={ulid()} />
        ))}
      </Grid>
      <Box
        w={{ base: '80%', lg: '60%' }}
        h={{ base: '80%', lg: '60%' }}
        pos='absolute'
        top={{ base: '16%', lg: '32%' }}
        left={{base: '0%', lg: '8%'}}
        bgColor='magenta'
        zIndex={0}
        borderRadius='50%'
        transform={'rotate(9.1deg)'}
        bgGradient='linear-gradient(121.75deg, rgba(255,16,19) 16.9%, rgba(140, 29, 207, 0) 88.02%)'
        filter={'blur(281.004px)'}
        opacity={0.8}
      />
    </HStack>
  )
}
