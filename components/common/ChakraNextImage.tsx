import { Box } from '@chakra-ui/react'
import * as React from 'react'
import NextImage from 'next/image'

export const ChakraNextImage: React.FC = ({ src, alt, ...rest }: any) => {
  return (
    <Box position='relative' {...rest}>
      <NextImage objectFit='cover' layout='fill' src={src} alt={alt} />
    </Box>
  )
}
