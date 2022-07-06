import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Text, Box, Link, HStack } from '@chakra-ui/react'

type BaseLinkProps = {
  href: string
  text: string
  alt?: string
  typeSize?: string
}

export const BaseLink = ({ href, text, alt, typeSize = '2xl' }: BaseLinkProps) => {
  return (
    <NextLink href={href} passHref={true}>
      <Link
        // alt={alt}
        display='flex'
        alignItems='baseline'
        marginRight='2'
        marginTop='4'
        target='_blank'>
        <HStack gap={2}>
          <Text
            fontWeight={700}
            fontSize={typeSize}
            marginRight='2'
            textAlign='center'>
            {text}
          </Text>
        </HStack>
        <Box marginLeft={2}>
          <Image src='/icons/arrow.png' alt='arrow' height={15} width={15} />
        </Box>
      </Link>
    </NextLink>
  )
}
