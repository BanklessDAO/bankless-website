import {
  Box,
  Text,
  Stack,
  Image,
  Flex,
  VStack,
  keyframes,
} from '@chakra-ui/react'
import { CTALink } from 'components/_common/CTALink'

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

const keyframeBeat = keyframes`
	to { 
    transform: scale(2) 
              translateX(25%)
              translateY(-25%);
  }
`

export default function IntroductionAboutUsComponent() {
  const animationTime = '5s'
  const animationCircleClock = `${keyframeCircleMove} ${animationTime} linear infinite`
  const animationCircleAntiClock = `${keyframeCircleMove} ${animationTime} linear infinite reverse`
  const animationBeat = `${keyframeBeat} ${animationTime} linear infinite alternate`
  return (
    <>
      <Stack
        align='center'
        justifyContent='center'
        direction={{ base: 'column', md: 'row' }}
        pb={{ base: '2rem', md: 0 }}
        h={{ base: 'fit-content', lg: '32rem' }}
        pos='relative'>
        <Flex
          flex={{ base: '0 0 70%', xl: '0 0 60%' }}
          justify={'center'}
          align={'center'}
          position={'relative'}
          zIndex={1}>
          <Box
            position={'relative'}
            overflow={'hidden'}
            w={'100%'}
            h={{ base: '32rem', xl: '32rem' }}
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
        <Box
          h={{ base: '24rem', xl: '32rem' }}
          w={{ base: '24rem', xl: '32rem' }}
          bgGradient='linear-gradient(121.75deg, rgba(255, 16, 19, 0.4) 58%, rgba(140, 29, 207, 0.6) 0%)'
          position='absolute'
          left={{ base: '20%', lg: '24%' }}
          bottom={{ base: '20%', lg: '4%' }}
          zIndex='0'
          filter='blur(6rem)'
          opacity={0.3}
          transform={'rotate(9.1deg)'}
          animation={animationBeat}
        />
        <Box flex={{ base: '0 0 30%', md: '0 0 50%' }} zIndex={1}>
          <VStack alignItems='flex-start'>
            <Text
              color={'white.100'}
              lineHeight={1.1}
              fontWeight={700}
              fontFamily='Clear Sans'
              fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}>
              What is BanklessDAO?
            </Text>
            <CTALink
              href='https://discord.com/invite/bankless'
              text='Join us'
              alt='Link to Bankless Discord'
            />
          </VStack>
        </Box>
      </Stack>
    </>
  )
}
