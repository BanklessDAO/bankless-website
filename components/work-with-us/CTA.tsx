import React from 'react'
import {
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'

type CTAProps = {
  text: string
  url: string
}

export const CTA = ({ text, url }: CTAProps) => (
  <Link href={url}>
    <Button colorScheme='red' w='fit-content'>
      <a>Visit {text}</a>
    </Button>
  </Link>
)
