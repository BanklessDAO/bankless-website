import { Link, Image } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/bankless-website'>
      <Image
        h='70px'
        src='/bankless-website/images/logo.png'
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
