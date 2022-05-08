import {
  Box,
  Heading,
  Text,
  Stack,
  HStack,
  Image,
  Flex,
  VStack,
  keyframes,
} from '@chakra-ui/react'
import NextLink from 'next/link'
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

const keyframeCircleMove = keyframes`
  0%{
    transform:rotate(0deg)
              translate(-24px)
              rotate(0deg);
  
  }
  100%{
    transform:rotate(360deg)
              translate(-24px)
              rotate(-360deg);
  }
`

export default function IntroductionAboutUsComponent() {
  const animationTime = '5s'
  const animationCircleClock = `${keyframeCircleMove} ${animationTime} linear infinite`
  const animationCircleAntiClock = `${keyframeCircleMove} ${animationTime} linear infinite reverse`
  return (
    <VStack>
      <Stack
        align='center'
        justifyContent='center'
        direction={{ base: 'column', md: 'row' }}>
        <Flex
          flex={{ base: '0 0 70%', xl: '0 0 60%' }}
          justify={'center'}
          align={'center'}
          position={'relative'}>
          <Box
            position={'relative'}
            overflow={'hidden'}
            w={'100%'}
            h='40rem'
            m={0}>
            <Image
              position={'absolute'}
              alt={'Cryptocurrency Image'}
              left='2rem'
              top='40%'
              width={'3rem'}
              src={'/images/about-us/Cryptocurrency.png'}
              animation={animationCircleAntiClock}
            />
            <Image
              position={'absolute'}
              alt={'Bnakless Image'}
              right='10%'
              top='30%'
              width={'3rem'}
              src={'/images/about-us/Bnakless.png'}
              animation={animationCircleClock}
            />
            <Image
              position={'absolute'}
              alt={'Aragon Image'}
              right='2rem'
              bottom='25%'
              width={'3rem'}
              src={'/images/about-us/Aragon.png'}
              animation={animationCircleAntiClock}
            />
            <Image
              position={'absolute'}
              alt={'Cryptocurrency Image'}
              right='30%'
              bottom='5%'
              width={'3rem'}
              src={'/images/about-us/Cryptocurrency1.png'}
              animation={`${keyframeCircleMove} 6s linear infinite`}
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

        <Box flex={{ base: '0 0 30%', xl: '0 0 50%' }}>
          <VStack alignItems='flex-start'>
            <Text
              color={'white.100'}
              lineHeight={1.1}
              fontWeight={700}
              fontFamily='Clear Sans'
              fontSize={{ base: '4xl', md: '6xl' }}>
              What is BanklessDAO?
            </Text>
            <NextLink
              href={'https://discord.com/invite/bankless'}
              passHref={true}>
              <HStack
                align={'center'}
                color={'white.100'}
                fontWeight={700}
                fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                fontFamily='Clear Sans'
                cursor='pointer'>
                <Text>Join us</Text>
                <FiArrowUpRight />
              </HStack>
            </NextLink>
          </VStack>
        </Box>
      </Stack>

      <Stack mt={{base:'1rem !important', xl:'2rem !important'}}>
        <Flex
          flex={1}
          columnGap='2rem'
          justify={{ base: 'center', md: 'space-around' }}
          align={'center'}
          wrap='wrap'>
          {menus.map((menu, index) => {
            return (
              <Flex
                align={'center'}
                color={'white.100'}
                key={index}
                >
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

      <Flex
        mt='10rem'
        flexDirection={{ base: 'column', md: 'row-reverse' }}
        justifyContent='center'
        alignItems='center'
        columnGap={16}
        rowGap={8}>
        <Box
          position={'relative'}
          height={'auto'}
          maxHeight={{ base: '800px', md: '300px' }}>
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
            fontSize={{ base: '2xl', md: '3xl' }}>
            Bankless is a movement for Web3 pioneers
          </Text>
          <Text color='grey' fontSize={{ base: 'xl', md: '2xl' }}>
            We seek new ways to build wealth, solve human coordination problems,
            create culture, and develop cutting-edge thought leadership in the
            crypto space. Going Bankless means taking control of your financial
            health by adopting decentralized and permissionless money systems.
            Bankless is the movement educating the world on how to do it.
          </Text>
        </Stack>
      </Flex>

      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent='center'
        alignItems='center'
        columnGap={16}
        rowGap={8}
        mt={8}>
        <Box
          position={'relative'}
          height={'auto'}
          maxHeight={{ base: '500px', md: '300px' }}>
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
            fontSize={{ base: '2xl', md: '3xl' }}>
            BanklessDAO is the homebase
          </Heading>
          <Text color={'gray'} fontSize={{ base: 'xl', md: '2xl' }}>
            BanklessDAO is a community of passionate Web3 thought-leaders who
            aim to educate new users, produce written and audio media, build DAO
            tooling, provide consulting services, develop Web3 scholarship, and
            create a social and creative home base for anyone in Web3. We’re so
            much more than a social DAO—we’re a shipping, building, and
            innovating DAO.
          </Text>
        </Stack>
      </Flex>
    </VStack>
  )
}
