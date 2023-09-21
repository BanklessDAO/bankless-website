import { Link, Image } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
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
    </Link>
  )
}

export default Logo
