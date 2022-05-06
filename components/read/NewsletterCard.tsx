import React from 'react'
import Image from 'next/image'
import { Text, Box, Link, GridItem } from '@chakra-ui/react'
import { ChakraNextImage } from 'components/common/ChakraNextImage'
type NewsletterCardProps = {
  title: string
  text: string
  href: string
  colSpan?: number
  rowSpan?: number
  image?: NewsletterCardImage
}

type NewsletterCardImage = {
  src: string
  alt: string
}

export const NewsletterCard = ({
  title,
  text,
  href,
  colSpan,
  rowSpan,
  image,
}: NewsletterCardProps) => {
  return (
    <GridItem
      as='li'
      alignItems='start'
      bgColor={'#101010'}
      padding={{base: 4 , md: 8}}
      borderRadius={6}
      m={0}
      rowSpan={{ base: 1, xl: rowSpan || 1 }}
      colSpan={{ base: 1, xl: colSpan || 1 }}
      listStyleType={'none'}
      pos='relative'>
      <Text
        fontSize={{base: '3xl', md:'5xl'}}
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
      {image && (
        <ChakraNextImage
          d={{base: 'none', xl: 'block'}}
          src={image.src}
          alt={image.alt}
          pos='absolute'
          width='30rem'
          height='28rem'
          zIndex={2}
          bottom={{ base: -10, xl: -20 }}
          right={{ base: -5, xl: 10 }}
        />
      )}
    </GridItem>
  )
}
