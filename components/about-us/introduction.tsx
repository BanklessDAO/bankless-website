import { Box, Heading, Text, Stack, Image, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

const menus = [
  { title: 'GOVERNANCE', href: '/about-us/governance' },
  { title: 'GUILDS', href: '/about-us/guilds' },
  { title: 'PROJECTS', href: '/about-us/projects' },
  { title: 'COORDINATION', href: '#' },
  { title: 'COMMUNITY CALLS', href: '/about-us/community-calls' },
  { title: 'PORTAL NODES', href: '#' },
  { title: 'MEDIA KIT', href: '#' },
]

export default function IntroductionAboutUsComponent() {
  return (
    <>
      <Stack
        align={{ base: 'flex-start', md: 'center' }}
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
          <Stack spacing={{ base: 3, md: 4 }}>
            <Heading
              color={'white.100'}
              lineHeight={1.1}
              fontWeight={800}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              textTransform={'uppercase'}
            >
              Want alpha?
            </Heading>
            <Heading
              color={'white.100'}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Join the BanklessDAO
            </Heading>
            <Link href={'/#'} passHref={true}>
              <Flex
                align={'center'}
                color={'white.100'}
                fontWeight={700}
                fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                cursor='pointer'
              >
                RSA <FiArrowUpRight />
              </Flex>
            </Link>
          </Stack>
        </Box>
      </Stack>

      <Stack>
        <Flex
          flex={1}
          justify={{ base: 'center', md: 'space-around' }}
          align={'center'}
          direction={{ md: 'row' }}
          wrap={'wrap'}
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
                    fontSize={{ base: '1xl', md: '2xl' }}
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

      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 10, md: 14 }}
        direction={{ base: 'column', md: 'row-reverse' }}
      >
        <Flex
          flex={1}
          justify={'right'}
          align={'right'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'300px'}
            maxWidth={{ base: '100%', md: '400px' }}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'/images/about-us/bankless-movement.png'}
            />
          </Box>
        </Flex>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            color={'gray.100'}
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '1xl', md: '2xl' }}
          >
            Bankless is a movement for Web3 pioneers
          </Heading>
          <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
            We seek new ways to build wealth, solve human coordination problems,
            create culture, and develop cutting-edge thought leadership in the
            crypto space. Going Bankless means taking control of your financial
            health by adopting decentralized and permissionless money systems.
            Bankless is the movement educating the world on how to do it.
          </Text>
        </Stack>
      </Stack>

      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 10, md: 14 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex
          flex={1}
          justify={'left'}
          align={'left'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'300px'}
            maxWidth={{ base: '100%', md: '400px' }}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'/images/about-us/bankless-dao.png'}
            />
          </Box>
        </Flex>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            color={'gray.100'}
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '1xl', md: '2xl' }}
          >
            BanklessDAO is the homebase
          </Heading>
          <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
            BanklessDAO is a community of passionate Web3 thought-leaders who
            aim to educate new users, produce written and audio media, build DAO
            tooling, provide consulting services, develop Web3 scholarship, and
            create a social and creative home base for anyone in Web3. We’re so
            much more than a social DAO—we’re a shipping, building, and
            innovating DAO.
          </Text>
        </Stack>
      </Stack>
    </>
  )
}
