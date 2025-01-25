import { Image } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Image
      h='70px'
      src='/images/logo.png'
      alt='Logo'
      display={{ base: 'none', md: 'flex' }}
      sx={{
        '@media (max-width: 1040px)': {
          display: 'none',
        },
      }}
    />
  )
}

export default Logo
