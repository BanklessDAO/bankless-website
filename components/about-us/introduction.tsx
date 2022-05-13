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

export default function IntroductionAboutUsComponent() {
  const animationTime = '5s'
  const animationCircleClock = `${keyframeCircleMove} ${animationTime} linear infinite`
  const animationCircleAntiClock = `${keyframeCircleMove} ${animationTime} linear infinite reverse`
  return (
    <>
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
            <CTALink href='https://discord.com/invite/bankless' text='Join us' alt='Link to Bankless Discord'/>
          </VStack>
        </Box>
      </Stack>
    </>
  )
}
