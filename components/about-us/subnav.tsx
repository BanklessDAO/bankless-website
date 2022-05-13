import { Text, Stack, Flex, Box } from '@chakra-ui/react'
import NextLink from 'next/link'

const menus = [
  { title: 'GOVERNANCE', href: '/about-us/governance' },
  { title: 'GUILDS', href: '/about-us/guilds' },
  { title: 'PROJECTS', href: '/about-us/projects' },
  // { title: 'COORDINATION', href: '#' },
  { title: 'COMMUNITY CALLS', href: '/about-us/community-calls' },
  { title: 'PORTAL NODES', href: '/about-us/nodes' },
  // { title: 'MEDIA KIT', href: '#' },
]

const Subnav = () => (
  <>
    <Stack mt={{ base: '1rem !important', xl: '2rem !important' }}>
      <Flex
        flex={1}
        columnGap='2rem'
        justify={{ base: 'center', md: 'space-around' }}
        align={'center'}
        wrap='wrap'>
        {menus.map((menu, index) => {
          return (
            <Flex align={'center'} color={'white.100'} key={index}>
              <NextLink href={menu.href} passHref={true}>
                <Text
                  mr={'0.25rem'}
                  fontSize={{ base: '4xl', md: '2xl' }}
                  fontWeight={700}
                  fontFamily='Clear Sans'
                  cursor='pointer'>
                  {menu.title}
                </Text>
              </NextLink>
            </Flex>
          )
        })}
      </Flex>
    </Stack>
    <Box
      height='2px'
      width='100%'
      mt='1rem !important'
      mb='4rem !important'
      backgroundImage='linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1), rgba(255,0,0,0))'
    />
  </>
)

export default Subnav
