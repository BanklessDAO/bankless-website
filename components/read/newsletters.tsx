import React from 'react'
import Image from 'next/image'

import { HStack, Text, Grid, VStack, Box, Link, GridItem } from '@chakra-ui/react'
import Underline from 'components/common/underline'

const newsletterCard = ({ 
  title,
  text,
  href,
  colSpan,
  rowSpan
}:{
  title: string,
  text: string,
  href: string,
  colSpan?: number,
  rowSpan?: number
}) => {
  return (
    <GridItem 
      alignItems='start'
      background='#222222'
      padding={4}
      borderRadius={8}
      rowSpan={{ base: 1, md: rowSpan || 1}}
      colSpan={{ base: 1, md: colSpan || 1}}>
      <Text fontSize='3xl' fontWeight={700}>{title}</Text>
      <Text fontSize='md' color='rgba(255, 255, 255, 0.57)'>{text}</Text>
      <Link
        display='flex'
        alignItems='center'
        marginRight='2'
        marginTop='8'
        href={href}>
        <Text fontSize='sm' marginRight={2}>View</Text>
        <Box>
          <Image
            src='/icons/arrow.png'
            alt='arrow'
            height={10}
            width={10}
          />
        </Box>
      </Link>
    </GridItem >
  )
}

const newsletters = [
  { 
    title: 'The Weekly Rollup',
    text: 'Weekly summary of everything that happens in bDAO. It’s the place to stay updated with the DAO.',
    href: '#',
    rowSpan: 2,
    colSpan: 1
  },
  { 
    title: 'Decentralized Art',
    text: 'Weekly Crypto Art and NFT newsletter.',
    href: '#',
    rowSpan: 1,
    colSpan: 1
  },
  { 
    title: 'Decentralized Law',
    text: 'The premier legal newsletter in the crypto space, publishing cutting-edge legal scholarship twice a month.',
    href: '#',
    rowSpan: 3,
    colSpan: 1
  },
  { 
    title: 'State of the DAOs',
    text: 'The high-signal-low-noise DAO ecosystem newsletter.',
    href: '#',
    rowSpan: 1,
    colSpan: 1
  },
  { 
    title: 'Gearing Up',
    text: 'Weekly bDAO project and guild highlights newsletter to help members stay up to speed on all internal bDAO updates.',
    href: '#',
    rowSpan: 2,
    colSpan: 2
  },
]

class Newsletter extends React.Component {
  render() {
    return (
      <HStack
        flexDir='column'
        justifyContent='start'
        alignItems='start'
        rowGap={{ base: 2, md: 4 }}
      >
        <Box>
          <Text fontWeight={700} fontSize='6xl' textAlign='center' maxW={750}>
            Newsletters
          </Text>
          <Underline />
        </Box>

        <Grid 
          gridTemplateColumns={{base: '1fr', md: 'repeat(3, 1fr)' }}
          templateRows={{base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={4}>
            {newsletters.map(_newsletter => newsletterCard(_newsletter))}
        </Grid>
      </HStack>
    )
  }
}

export default Newsletter
