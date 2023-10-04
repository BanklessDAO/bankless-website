import { Text, Stack, Flex, Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ulid } from 'ulid'

const linksData = [
  {
    title: 'GOVERNANCE',
    href: '/about-us/governance',
    alt: 'Link to Governance page',
  },
  { title: 'GUILDS', href: '/about-us/guilds', alt: 'Link to Guilds page' },
  {
    title: 'PROJECTS',
    href: '/about-us/projects',
    alt: 'Link to Projects page',
  },
  // { title: 'COORDINATION', href: '#' },
  {
    title: 'COMMUNITY CALLS',
    href: '/about-us/community-calls',
    alt: 'Link to Community Calls page',
  },
  {
    title: 'MEDIA NODES',
    href: '/about-us/nodes',
    alt: 'Link to Portal Nodes page',
  },
  // { title: 'MEDIA KIT', href: '#' },
]

type Link = {
  title: string
  href: string
  alt: string
}

const Subnav = () => (
  <>
    <Stack mt={{ base: '1rem !important', xl: '2rem !important' }}>
      <Flex
        flex={1}
        direction={{ base: 'column', md: 'row' }}
        columnGap='2rem'
        justify={{ base: 'center', md: 'space-around' }}
        align={'center'}
        wrap='wrap'
      >
        {linksData.map(({ href, title }: Link, index: number) => {
          return (
            <NextLink key={ulid()} href={href} passHref={true}>
              <Link>
                <Flex p={{ base: 2, md: 0 }} align={'center'} key={index}>
                  <Text
                    color={'white.100'}
                    mr={'0.25rem'}
                    fontSize={{ base: 'l', md: 'l', xl: '2xl' }}
                    fontWeight={700}
                    fontFamily='Clear Sans'
                    cursor='pointer'
                  >
                    {title}
                  </Text>
                </Flex>
              </Link>
            </NextLink>
          )
        })}
      </Flex>
    </Stack>
    <Box
      height='2px'
      width='100%'
      mt='1rem !important'
      mb='4rem !important'
      backgroundImage='linear-gradient(to right, rgba(255,0,0,0), #d02128, rgba(255,0,0,0))'
    />
  </>
)

export default Subnav
