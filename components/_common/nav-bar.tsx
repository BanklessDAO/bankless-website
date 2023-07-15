import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { ulid } from 'ulid'
import styles from 'styles/NavBar.module.css'
import { useMediaQuery } from '@chakra-ui/react'

import { Link, Box, Flex, Text, Stack } from '@chakra-ui/react'
import Logo from './Logo'

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

const aboutUsLinksData = [
  {
    title: 'Governance',
    href: '/about-us/governance',
    alt: 'Link to Governance page',
  },
  { title: 'Guilds', href: '/about-us/guilds', alt: 'Link to Guilds page' },
  {
    title: 'Projects',
    href: '/about-us/projects',
    alt: 'Link to Projects page',
  },
  {
    title: 'Community Calls',
    href: '/about-us/community-calls',
    alt: 'Link to Community Calls page',
  },
  {
    title: 'Media Nodes',
    href: '/about-us/nodes',
    alt: 'Link to Portal Nodes page',
  },
]

const investLinksData = [
  {
    title: 'Lock BANK',
    href: '/tlBank',
    alt: 'Link to Lock BANK page',
  },
]

type Link = {
  title: string
  href: string
  alt: string
}

const NavBar = props => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Logo />
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
    fill='white'
  >
    <title>Menu</title>
    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
  </svg>
)

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      display='none'
      onClick={toggle}
      sx={{
        '@media (max-width: 1040px)': {
          display: 'block',
        },
      }}
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}

const MenuItem = ({ children, to = '/', ...rest }) => {
  const router = useRouter()
  const onPage = useMemo(() => router.pathname == to, [router.pathname, to])
  return (
    <Link
      as='a'
      href={to}
      textDecoration='none'
      _hover={{
        color: 'white',
        borderBottom: 'solid 4px white',
      }}
      borderBottom={onPage ? 'solid 4px red' : 'solid 4px transparent'}
      {...rest}
      sx={{
        '@media (max-width: 1040px)': {
          paddingTop: '16px',
        },
      }}
    >
      <Text
        display='block'
        fontWeight={600}
        whiteSpace={'nowrap'}
        _hover={{
          color: 'white',
          borderBottom: 'solid 4px white',
        }}
        borderBottom={onPage ? 'solid 4px red' : 'solid 4px transparent'}
      >
        {children}
      </Text>
    </Link>
  )
}

const DropDownItem = ({ children, to = '/', ...rest }) => {
  const router = useRouter()
  const onPage = useMemo(() => router.pathname == to, [router.pathname, to])
  return (
    <Link
      as='a'
      href={to}
      textDecoration='none'
      _hover={{
        color: 'red',
      }}
      {...rest}
      sx={{
        '@media (max-width: 1040px)': {
          paddingTop: '1px',
        },
      }}
    >
      <Text
        display='block'
        fontWeight={600}
        whiteSpace={'nowrap'}
        _hover={{
          color: 'red',
        }}
        color={onPage ? 'red' : '#fff'}
        textTransform={'capitalize'}
        sx={{
          '@media (max-width: 1040px)': {
            fontSize: '100%',
          },
        }}
      >
        {children}
      </Text>
    </Link>
  )
}

const DropdownMenu = ({linksData}) => {
  const [isMobile] = useMediaQuery('(max-width: 1040px)')

  return (
    <Box
      position='absolute'
      left='50%'
      transform='translateX(-50%)'
      top='100%'
      bg='primary.500'
      borderRadius='md'
      paddingTop={'1rem'}
      display={'none'}
      className={`${styles['dropdown']}`}
      textAlign={'center'}
      transition='all 1s ease-in-out'
      zIndex='dropdown'
      sx={{
        '@media (max-width: 1040px)': {
          textAlign: 'start',
        },
      }}
    >
      <Stack
        spacing={1}
        marginBottom={'1rem'}
        sx={{
          '@media (max-width: 1040px)': {
            marginLeft: '20%',
          },
        }}
      >
        {linksData.map(({ href, title }: Link) => {
          return (
            <DropDownItem key={ulid()} to={href}>
              {title}
            </DropDownItem>
          )
        })}
      </Stack>
    </Box>
  )
}

const MenuLinks = ({ isOpen }) => {
  const [isMobile] = useMediaQuery('(max-width: 1040px)')

  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
      sx={{
        '@media (max-width: 1040px)': {
          display: isOpen ? 'block' : 'none',
          'flex-basis': '100%',
        },
      }}
    >
      <Stack
        spacing={8}
        className='linkStack'
        align='center'
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
        mb='8px'
        sx={{
          '@media (max-width: 1040px)': {
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            paddingTop: '16px',
            gap: '0.4rem',
          },
        }}
      >
        {NAV_LINKS.map((_navLink, idx) => {
          const isAboutUs = _navLink.name === 'About Us'
          const isInvest = _navLink.name === 'Invest'

          return (
            <Box
              key={`link-${idx}`}
              position='relative'
              className={`${styles['navLink']}`}
              sx={{
                '@media (max-width: 1040px)': {
                  marginInlineStart: '0px!important',
                  marginTop: '0px!important',
                },
              }}
            >
              <MenuItem to={_navLink.href}>{_navLink.name}</MenuItem>
              {isAboutUs && <DropdownMenu linksData={aboutUsLinksData} />}
              {isInvest && <DropdownMenu linksData={investLinksData} />}
            </Box>
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
      {...props}
      sx={{
        '@media (max-width: 1040px)': {
          background: 'primary.500',
          color: 'white',
        },
      }}
    >
      {children}
    </Flex>
  )
}

export default NavBar
