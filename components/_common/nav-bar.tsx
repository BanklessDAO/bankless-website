import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'

import { Link, Box, Flex, Text, Stack } from '@chakra-ui/react'

const NAV_LINKS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Us',
    href: '/about-us',
  },
  {
    name: 'Work With Us',
    href: '/work-with-us',
  },
  {
    name: 'Read',
    href: '/read',
  },
  {
    name: 'Invest',
    href: '/invest',
  },
  {
    name: 'Listen',
    href: '/listen',
  },
  {
    name: 'New Members Start',
    href: '/new-members',
  },
]

const Logo = props => {
  return (
    <Box {...props}>
      <Image
        src='/icons/bankless-logo.png'
        height={96}
        width={96}
        alt='dao-logo'
      />
    </Box>
  )
}

const NavBar = props => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Logo
        display={{ base: 'none', md: 'block' }}
        w='100px'
        color={['white', 'white', 'primary.500', 'primary.500']}
      />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

const CloseIcon = () => (
  <svg width='24' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
    <title>Close</title>
    <path
      fill='white'
      d='M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z'
    />
  </svg>
)

const MenuIcon = () => (
  <svg
    width='24px'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
    fill='white'>
    <title>Menu</title>
    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
  </svg>
)

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}

const MenuItem = ({ children, to = '/', ...rest }) => {
  return (
    <Link
      as='a'
      href={to}
      textDecoration='none'
      _hover={{
        color: 'white',
        borderBottom: 'solid 4px #D02128',
      }}>
      <Text display='block' fontWeight={600}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}>
      <Stack
        spacing={8}
        className='linkStack'
        align='center'
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
        mb='8px'>
        {NAV_LINKS.map((_navLink, idx) => {
          return (
            <MenuItem key={`link-${idx}`} to={_navLink.href}>
              {_navLink.name}
            </MenuItem>
          )
        })}
      </Stack>
    </Box>
  )
}

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      zIndex={2}
      {...props}>
      {children}
    </Flex>
  )
}

export default NavBar
