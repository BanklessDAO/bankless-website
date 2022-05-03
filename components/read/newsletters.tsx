import React from 'react'
import Image from 'next/image'
import { ulid } from 'ulid'
import { HStack, Text, Grid, Box, Link, GridItem } from '@chakra-ui/react'
import Underline from 'components/common/underline'

type NewsletterCardProps = {
  title: string
  text: string
  href: string
  colSpan?: number
  rowSpan?: number
}

const NewsletterCard = ({
  title,
  text,
  href,
  colSpan,
  rowSpan,
}: NewsletterCardProps) => {
  return (
    <GridItem
      alignItems='start'
      background='#222222'
      padding={4}
      borderRadius={8}
      rowSpan={{ base: 1, md: rowSpan || 1 }}
      colSpan={{ base: 1, md: colSpan || 1 }}>
      <Text fontSize='3xl' fontWeight={700}>
        {title}
      </Text>
      <Text fontSize='md' color='rgba(255, 255, 255, 0.57)'>
        {text}
      </Text>
      <Link
        display='flex'
        alignItems='center'
        marginRight='2'
        marginTop='8'
        href={href}>
        <Text fontSize='sm' marginRight={2}>
          View
        </Text>
        <Box>
          <Image src='/icons/arrow.png' alt='arrow' height={10} width={10} />
        </Box>
      </Link>
    </GridItem>
  )
}

const Newsletter: React.FC = () => {
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
      rowSpan: 2,
      colSpan: 2,
    },
  ]

  return (
    <HStack
      flexDir='column'
      justifyContent='start'
      alignItems='start'
      rowGap={{ base: 2, md: 4 }}>
      <Box>
        <Text fontWeight={700} fontSize='6xl' textAlign='center' maxW={750}>
          Newsletters
        </Text>
        <Underline />
      </Box>

      <Grid
        gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        templateRows={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={4}>
        {newsletters.map(newsletter => (
          <NewsletterCard {...newsletter} key={ulid()} />
        ))}
      </Grid>
    </HStack>
  )
}

export default Newsletter
