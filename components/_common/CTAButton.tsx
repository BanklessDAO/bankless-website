import React from 'react'
import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Link, Text } from '@chakra-ui/react'

type CTAButtonProps = {
  text: string
  url: string
  isExternal: boolean
}

export const CTAButton = ({ text, url, isExternal }: CTAButtonProps) => (
  <NextLink href={url} passHref={true}>
    <Link
      isExternal={isExternal}
      display='flex'
      justifyContent='start'
      textDecoration='none'
    >
      <Button colorScheme='#D02128' w='fit-content' h='3rem'>
        <Text fontWeight={700} marginRight='2' textAlign='left'>
          Visit {text}
        </Text>
      </Button>
    </Link>
  </NextLink>
)
