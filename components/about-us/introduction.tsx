import { Box, Heading, Text, Stack, Image, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

const menus = [
  { title: 'GOVERNANCE', href: '/about-us/governance' },
  { title: 'GUILDS', href: '/about-us/guilds' },
  { title: 'PROJECTS', href: '/about-us/projects' },
  // { title: 'COORDINATION', href: '#' },
  { title: 'COMMUNITY CALLS', href: '/about-us/community-calls' },
  { title: 'PORTAL NODES', href: '/about-us/nodes' },
  // { title: 'MEDIA KIT', href: '#' },
]

export default function IntroductionAboutUsComponent() {
  return (
    <Flex 
      paddingX={16}
      flexDirection='column'
      rowGap={8}>
      <Stack
        align='center'
        justifyContent='center'
        spacing={{ base: 8, md: 10 }}
        mt={{ base: 5, md: 10 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            rounded={'2xl'}
            overflow={'hidden'}
            w={'100%'}
            sx={{ height: { base: '400px', md: '450px' } }}
          >
            <Image
              position={'absolute'}
              alt={'Cryptocurrency Image'}
              left='0'
              top='40%'
              width={'3rem'}
              src={'/images/about-us/Cryptocurrency.png'}
            />
            <Image
              position={'absolute'}
              alt={'Bnakless Image'}
              right='10%'
              top='30%'
              width={'3rem'}
              src={'/images/about-us/Bnakless.png'}
            />
            <Image
              position={'absolute'}
              alt={'Aragon Image'}
              right='0'
              bottom='25%'
              width={'3rem'}
              src={'/images/about-us/Aragon.png'}
            />
            <Image
              position={'absolute'}
              alt={'Cryptocurrency Image'}
              right='30%'
              bottom='5%'
              width={'3rem'}
              src={'/images/about-us/Cryptocurrency1.png'}
            />
            <Image
              alt={'Instructor Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'/images/about-us/Instructor.png'}
            />
          </Box>
        </Flex>

        <Box flex={1}>
          <Stack 
            spacing={{ base: 3, md: 4 }}
            >
            <Text
              color={'white.100'}
              lineHeight={1.1}
              fontWeight={800}
              fontSize={{ base: '6xl', md: '5xl' }}
              textTransform={'uppercase'}
            >
              What is Bankless DAO?
            </Text>
            {/* <Heading
              color={'white.100'}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Join the BanklessDAO
            </Heading> */}
            <Link href={'https://discord.com/invite/bankless'} passHref={true}>
              <Flex
                align={'center'}
                color={'white.100'}
                fontWeight={700}
                fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                cursor='pointer'
              >
                Join Us <FiArrowUpRight />
              </Flex>
            </Link>
          </Stack>
        </Box>
      </Stack>

      <Stack mt={6}>
        <Flex
          flex={1}
          justify={{ base: 'center', md: 'space-around' }}
          align={'center'}
          wrap='wrap'
          columnGap={{base: 12, md: 12 }}
        >
          {menus.map((menu, index) => {
            return (
              <Flex
                align={'center'}
                color={'white.100'}
                key={index}
                padding={{ base: '0.25rem', md: '0.5rem' }}
                
              >
                <Link href={menu.href} passHref={true}>
                  <Text
                    mr={'0.25rem'}
                    fontSize={{ base: '4xl', md: '2xl' }}
                    fontWeight={'bold'}
                    cursor='pointer'
                  >
                    {menu.title}
                  </Text>
                </Link>
              </Flex>
            )
          })}
        </Flex>
      </Stack>

      <Box
        height='2px'
        width='100%'
        backgroundImage='linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1), rgba(255,0,0,0))'
      ></Box>

      <Flex
        flexDirection={{ base: 'column', md: 'row-reverse'}}
        justifyContent='center'
        alignItems='center'
        columnGap={16}
        rowGap={8}
        >
        <Box
          position={'relative'}
          height={'auto'}
          maxHeight={{ base: '800px', md: '300px' }}
        >
          <Image
            alt={'Hero Image'}
            fit={'contain'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={'/images/about-us/bankless-movement.png'}
          />
        </Box>
        <Stack flex={1} spacing={{ base: 5, md: 4 }}>
          <Text
            color={'gray.100'}
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '4xl', md: '2xl' }}
          >
            Bankless is a movement for Web3 pioneers
          </Text>
          <Text color='grey'>
            We seek new ways to build wealth, solve human coordination problems,
            create culture, and develop cutting-edge thought leadership in the
            crypto space. Going Bankless means taking control of your financial
            health by adopting decentralized and permissionless money systems.
            Bankless is the movement educating the world on how to do it.
          </Text>
        </Stack>
        
      </Flex>

      <Flex
        flexDirection={{ base: 'column', md: 'row'}}
        justifyContent='center'
        alignItems='center'
        columnGap={16}
        rowGap={8}
        >
        <Box
          position={'relative'}
          height={'auto'}
          maxHeight={{ base: '500px', md: '300px' }}
        >
          <Image
            alt={'Hero Image'}
            fit={'contain'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={'/images/about-us/bankless-dao.png'}
          />
        </Box>
        <Stack flex={1} spacing={{ base: 5, md: 4 }}>
          <Heading
            color={'gray.100'}
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '4xl', md: '2xl' }}
          >
            BanklessDAO is the homebase
          </Heading>
          <Text color={'gray'}>
            BanklessDAO is a community of passionate Web3 thought-leaders who
            aim to educate new users, produce written and audio media, build DAO
            tooling, provide consulting services, develop Web3 scholarship, and
            create a social and creative home base for anyone in Web3. We’re so
            much more than a social DAO—we’re a shipping, building, and
            innovating DAO.
          </Text>
        </Stack>
        
      </Flex>
    
    </Flex>
  )
}
