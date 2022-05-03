import { Box } from '@chakra-ui/react'
import * as React from 'react'
import NextImage from 'next/image'

export const ChakraNextImage = ({ src, alt, ...rest }: any) => {
  return (
    <Box position='relative' {...rest} sx={{ img: { borderRadius: '16px' } }}>
      <NextImage objectFit='cover' layout='fill' src={src} alt={alt} />
    </Box>
  )
}
