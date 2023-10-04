import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Text, Box, Link } from '@chakra-ui/react'

type CTALink = {
  href: string
  text: string
  alt: string
}

export const CTALink = ({ href, text }: CTALink) => {
  return (
    <NextLink href={href} passHref={true}>
      <Link
        display='flex'
        alignItems='baseline'
        marginRight='2'
        marginTop='4'
        target='_blank'
        // alt={alt}
      >
        <Text
          fontWeight={700}
          fontSize='2xl'
          marginRight='2'
          textAlign='center'
        >
          {text}
        </Text>
        <Box marginLeft={2}>
          <Image src='/icons/arrow.png' alt='arrow' height={15} width={15} />
        </Box>
      </Link>
    </NextLink>
  )
}
