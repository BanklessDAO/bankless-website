import React from 'react'
import Image from 'next/image'
import { Text, Box, Link, GridItem } from '@chakra-ui/react'
type NewsletterCardProps = {
  title: string
  text: string
  href: string
  colSpan?: number
  rowSpan?: number
}

export const NewsletterCard = ({
  title,
  text,
  href,
  colSpan,
  rowSpan,
}: NewsletterCardProps) => {
  return (
    <GridItem
      as='li'
      alignItems='start'
      bgColor={'#101010'}
      padding={8}
      borderRadius={6}
      m={0}
      rowSpan={{ base: 1, md: rowSpan || 1 }}
      colSpan={{ base: 1, md: colSpan || 1 }}
      listStyleType={'none'}>
      <Text
        fontSize='5xl'
        fontWeight={900}
        fontFamily='Clear Sans'
        lineHeight={1.2}>
        {title}
      </Text>
      <Text
        fontSize='xl'
        color='rgba(255, 255, 255, 0.57)'
        fontFamily='Clear Sans'
        lineHeight={1.5}
        pt='1em'>
        {text}
      </Text>
      <Link
        display='flex'
        alignItems='center'
        marginRight='2'
        marginTop={6}
        href={href}>
        <Text fontSize='xl' marginRight={2} fontFamily='Clear Sans'>
          View
        </Text>
        <Box>
          <Image src='/icons/arrow.png' alt='arrow' height={10} width={10} />
        </Box>
      </Link>
    </GridItem>
  )
}
