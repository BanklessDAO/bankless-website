import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react'
import Underline from 'components/_common/underline'

export default function OurMissionIntroComponent() {
  const pxBase = 0
  const pxMd = 40
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        alignItems={'center'}
        spacing={{ base: 4, md: 7 }}
        mt={{ base: '2rem', md: '1rem', lg: '6rem' }}
        pb={{ base: '2rem', md: '4rem', lg: '6rem' }}>
        <Heading
          fontFamily='Clear Sans'
          fontWeight={{ base: 600, md: 800 }}
          fontSize={{ base: '3xl', md: '4xl' }}
          lineHeight={'110%'}
          color={'white.100'}
          textTransform={'uppercase'}
          pb={{ base: '2rem', md: 0 }}>
          Our mission
          <Underline />
        </Heading>

        <Text
          w={{ base: '100%', md: '75%', lg: '100%' }}
          fontFamily='Clear Sans'
          fontSize={{ base: 'xl', lg: '2xl' }}
          color={'grey'}
          textAlign={'center'}
          px={{ base: pxBase, lg: pxMd }}>
          Our mission is to onboard 1 billion people to crypto. The nodes in our
          growing ecosystem collaborate to create user-friendly onramps for
          people to discover, use, learn, and enjoy the benefits of Web3.
          Everyone falls down the rabbithole a different way—we provide all the
          ways.
        </Text>
      </Stack>
    </>
  )
}
