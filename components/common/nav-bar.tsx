import React from 'react'
import Image from 'next/image'

import { Box, Button } from '@chakra-ui/react'

const NAV_LINKS = [
  {
    name: 'About Us',
    href: '/about-us',
  },
  {
    name: 'Invest',
    href: '#',
  },
  {
    name: 'Read',
    href: '#',
  },
  {
    name: 'Work With Us',
    href: '#',
    children: [
      {
        name: 'Work 1',
        href: '#',
      },
      {
        name: 'Work 2',
        href: '#',
      },
    ],
  },
]

class NavBar extends React.Component {
  render() {
    return (
      <Box className='nav-bar'>
        <Box className='nav-contents'>
          <Box className='nav-links'>
            {NAV_LINKS.map((_navLink, idx) => {
              const hasChildren =
                _navLink.children && _navLink.children.length > 0

              return (
                <Box key={`link-${idx}`}>
                  <span>
                    {hasChildren ? _navLink.name : <a href={_navLink.href}>{_navLink.name}</a>}
                    {hasChildren && (
                      <span className='nav-icon'>
                        <Image
                          src='/icons/vector.png'
                          alt='down-caret'
                          width={15}
                          height={10}
                        />
                      </span>
                    )}
                  </span>
                </Box>
              )
            })}
          </Box>

          <Button>Connect Wallet</Button>
        </Box>
      </Box>
    )
  }
}

export default NavBar
