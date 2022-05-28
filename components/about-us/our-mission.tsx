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
        spacing={{ base: 4, md: 7 }}
        mt={{ base: '2rem', lg: '6rem' }}
        pb={{ base: '2rem', md: '4rem', lg: 0 }}
        >
        <Heading
          fontWeight={{ base: 600, md: 800 }}
          fontSize={{ base: '3xl', md: '4xl' }}
          lineHeight={'110%'}
          color={'white.100'}
          textTransform={'uppercase'}
          pb={{base: '2rem'}}>
          Our mission
          <Underline />
        </Heading>

        <Text
          color={'grey'}
          fontSize={{ base: 'xl', md: '2xl' }}
          textAlign={'center'}
          w={'100%' }
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
