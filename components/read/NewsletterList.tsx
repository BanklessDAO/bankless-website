import React from 'react'
import { ulid } from 'ulid'
import { HStack, Text, Grid, Box } from '@chakra-ui/react'
import Underline from 'components/common/underline'
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
      title: 'Decentralized Art',
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
        alt: 'token 3d graphic'
      }
    },
    {
      title: 'State of the DAOs',
      text: 'The high-signal-low-noise DAO ecosystem newsletter.',
      href: 'https://banklessdao.substack.com/s/state-of-the-daos',
      rowSpan: 1,
      colSpan: 1,
    },
    {
      title: 'Gearing Up',
      text: 'Weekly bDAO project and guild highlights newsletter to help members stay up to speed on all internal bDAO updates.',
      href: 'https://banklessdao.substack.com/s/gearing-up?utm_source=substack&utm_medium=menu',
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
      pt={'8rem'}
      pos='relative'>
      <Box zIndex={1}>
        <Text
          fontWeight={700}
          fontSize='6xl'
          textAlign='center'
          maxW={750}
          fontFamily='Clear Sans'>
          Newsletters
        </Text>
        <Underline />
      </Box>

      <Grid
        as='ul'
        gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        templateRows={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={4}
        zIndex={1}
        m={0}
        p={0}
        w='100%'
        h='100%'>
        {newsletters.map(newsletter => (
          <NewsletterCard {...newsletter} key={ulid()} />
        ))}
      </Grid>
      <Box
        w={'1294px'}
        h={'1044px'}
        pos='absolute'
        top={0}
        bgColor='magenta'
        zIndex={0}
        borderRadius='50%'
        transform={'rotate(9.1deg)'}
        bgGradient='linear-gradient(121.75deg, rgba(255,16,19) 16.9%, rgba(140, 29, 207, 0) 88.02%)'
        filter={'blur(281.004px)'}
        opacity={0.2}
      />
    </HStack>
  )
}
