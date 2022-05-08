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
import { boolean } from 'yup'

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

type TextRow = {
  imageSrc: string
  imageAlt: string
  title: string
  para: string
  reversed?: boolean
}

const TextRow = ({
  para,
  title,
  imageSrc,
  imageAlt,
  reversed = false,
}: TextRow) => {
  return (
    <Flex
      mt='10rem'
      flexDirection={{ base: 'column', lg: reversed ? 'row-reverse' : 'row' }}
      justifyContent='center'
      alignItems='center'
      pb='2rem'>
      <Box
        flex='0 0 40%'
        pos={'relative'}
        h={{base: '40vw', lg: '20vw'}}
        w='100%'
        pb={{ base: '2rem', lg: 0 }}
        pr={{ base: 0, lg: !reversed ? '2rem' : 0 }}>
        <Image
          alt={imageAlt}
          fit={'cover'}
          align={'center'}
          w={'100%'}
          h={'100%'}
          src={imageSrc}
        />
      </Box>
      <Stack flex={1} pr={{ base: 0, lg: '1rem' }}>
        <Text
          color={'gray.100'}
          lineHeight={1.2}
          fontWeight={700}
          fontFamily='Clear Sans'
          fontSize='4xl'
          pb='1rem'
          w={{ base: '60%', lg: '' }}>
          {title}
        </Text>
        <Text
          color='grey'
          fontSize='2xl'
          fontFamily='Clear Sans'
          lineHeight={1.2}>
          {para}
        </Text>
      </Stack>
    </Flex>
  )
}

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
      <TextRow
        reversed={true}
        imageSrc='/images/about-us/bankless-movement.png'
        imageAlt='abstract image of ethereum'
        title='Bankless is a movement for Web3 pioneers'
        para='We seek new ways to build wealth, solve human coordination problems, create culture, and develop cutting-edge thought leadership in the crypto space. Going Bankless means taking control of your financial health by adopting decentralized and permissionless money systems. Bankless is the movement educating the world on how to do it.'
      />
      <TextRow
        imageSrc='/images/about-us/bankless-dao.png'
        imageAlt='abstract image of ethereum'
        title='BanklessDAO is the homebase'
        para="BanklessDAO is a community of passionate Web3 thought-leaders who aim to educate new users, produce written and audio media, build DAO tooling, provide consulting services, develop Web3 scholarship, and create a social and creative home base for anyone in Web3. We're so much more than a social DAO—we're a shipping, building, and
      innovating DAO."
      />
    </VStack>
  )
}
