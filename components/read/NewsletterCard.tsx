import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Text, Box, GridItem, Link, transition } from '@chakra-ui/react'
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
    <NextLink href={href}>
      <GridItem
        as='li'
        alignItems='start'
        bgColor={'#101010'}
        padding={{ base: 4, md: 8 }}
        borderRadius={6} 
        m={0}
        rowSpan={{ base: 1, xl: rowSpan || 1 }}
        colSpan={{ base: 1, xl: colSpan || 1 }}
        listStyleType={'none'}
        pos='relative'
        border='1px solid rgba(255, 0, 0, 0)'
        _hover={{
          textDecoration: 'none',
          backgroundColor: 'rgba(16, 16, 16, 0.6)',
          transition: 'background-color 125ms ease-in-out',
          border: '1px solid rgba(255, 0, 0, 0.5)',
        }}>
        <Link
          alt={`Visit ${title}`}
          textDecoration='none'
          _hover={{
            textDecoration: 'none',
            backgroundColor: 'rgba(16, 16, 16, 0.7)',
          }}>
          <Text fontSize={'4xl'} fontWeight={700} fontFamily='Clear Sans'>
            {title}
          </Text>
          <Text
            fontSize='xl'
            textOverflow='wrap'
            fontFamily='Clear Sans'
            color='grey'
            lineHeight='1.2'
            m={0}
            maxW='80%'>
            {text}
          </Text>
          <Box display='flex' alignItems='center' marginRight='2' marginTop={6}>
            <Text fontSize='xl' marginRight={2} fontFamily='Clear Sans'>
              View
            </Text>
            <Box>
              <Image
                src='/icons/arrow.png'
                alt='arrow'
                height={10}
                width={10}
              />
            </Box>
          </Box>
          {image && (
            <ChakraNextImage
              d={{ base: 'none', xl: 'block' }}
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
        </Link>
      </GridItem>
    </NextLink>
  )
}
