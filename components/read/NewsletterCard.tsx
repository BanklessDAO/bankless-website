import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Text, Box, GridItem, Link, keyframes, VStack } from '@chakra-ui/react'
import { ChakraNextImage } from 'components/_common/ChakraNextImage'
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

const keyframeSideToSide = keyframes`
  0% {transform: translateX(0rem)}
  50% {transform: translateX(2rem)}
  100% {transform: translateX(0rem)}
`

export const NewsletterCard = ({
  title,
  text,
  href,
  colSpan,
  rowSpan,
  image,
}: NewsletterCardProps) => {
  const animationSideToSide = `${keyframeSideToSide} infinite 4s ease-in-out forwards`
  return (
    <GridItem
      as='li'
      alignItems='start'
      bgColor={'#101010'}
      borderRadius={6}
      h={{
        base: image ? '160vw' : 'auto',
        sm: image ? '32rem' : 'auto',
        md: image ? '32rem' : 'auto',
        lg: 'auto',
      }}
      m={0}
      rowSpan={{ base: image ? 6 : 1, xl: rowSpan || 1 }}
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
      <NextLink href={href} passHref={true}>
        <Link
          // alt={`Visit ${title}`}
          textDecoration='none'
          _hover={{
            textDecoration: 'none',
            backgroundColor: 'rgba(16, 16, 16, 0.7)',
          }}>
          <VStack p={{ base: 4, md: 8 }} alignItems='start'>
            <Text fontSize={'4xl'} fontWeight={700} fontFamily='Clear Sans'>
              {title}
            </Text>
            <Text
              fontSize={{base:'xl', md: 'xl'}}
              textOverflow='wrap'
              fontFamily='Clear Sans'
              color='grey'
              lineHeight='1.2'
              m={0}
              maxW={{ base: '100%', md: '80%' }}>
              {text}
            </Text>
            <Box
              display='flex'
              alignItems='center'
              marginRight='2'
              marginTop={6}>
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
                d={'block'}
                src={image.src}
                alt={image.alt}
                pos='absolute'
                width={{ base: '80vw',sm:'30rem', md: '30rem' }}
                height={{ base: '80vw',sm:'30rem', md: '28rem' }}
                zIndex={2}
                bottom={{ base: -10, xl: -20 }}
                right={{ base: -5, xl: 10 }}
                _hover={{
                  // transform: 'translateX(6rem)',
                  // transition: 'transform 250ms ease-in-out',
                  animation: animationSideToSide,
                }}
              />
            )}
          </VStack>
        </Link>
      </NextLink>
    </GridItem>
  )
}
