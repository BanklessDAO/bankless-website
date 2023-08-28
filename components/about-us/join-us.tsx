import { Box, Heading, Text, Stack, Flex, VStack } from '@chakra-ui/react'
import Underline from 'components/_common/underline'

export default function JoinUsIntroComponent() {
  return (
    <VStack px={{ base: 0, lg: 40 }}>
      <Stack
        as={Box}
        textAlign={'left'}
        spacing={{ base: 4, md: 7 }}
        pb={{ base: '2rem', md: '2rem', lg: 0 }}
        mt={{ lg: '6rem' }}>
        <Heading
          alignSelf={{ base: 'center', md: 'flex-start' }}
          fontFamily='Clear Sans'
          fontWeight={{ base: 600, md: 800 }}
          fontSize={{ base: '3xl', md: '4xl' }}
          lineHeight={'110%'}
          color={'white.100'}
          textTransform={'uppercase'}
          pb={{ base: '2rem', md: 0 }}>
          Join Us
          <Underline />
        </Heading>
        <Text
          color='grey'
          fontSize={{ base: 'xl', lg: '2xl' }}
          fontFamily='Clear Sans'
          mt={0}
          p={0}
          textAlign={'left'}>
          {`This open and liberal financial system is just getting started. We're
          building new economies, new ways to work, new thought leadership and
          scholarship, and new forms of art.`}
        </Text>
      </Stack>
      <Stack
        as={Box}
        textAlign={'left'}
        spacing={{ base: 4, md: 2, lg: 3 }}
        pb={{ base: '4rem', md: '4rem'}}
        pt={{ lg: '3rem' }}
        mt={{ md: '1rem', lg: '6rem' }}>
        <Text
          color={'white.100'}
          fontSize={{ base: 'xl', md: '2xl' }}
          fontFamily='Clear Sans'
          fontWeight='bold'
          mt={0}
          p={0}>
          Join us and embark on our mission:
        </Text>
        <Text
          color='grey'
          fontSize={{ base: 'xl', md: 'lg', lg: 'xl' }}
          fontFamily='Clear Sans'
          mt={0}
          p={0}
          textAlign={'left'}>
          To educate the masses in this new decentralized money system that
          anyone can use to build wealth and climb the economic ladder.
        </Text>
        <Text
          color='grey'
          fontSize={{ base: 'xl', md: 'lg', lg: 'xl' }}
          fontFamily='Clear Sans'
          mt={0}
          p={0}
          textAlign={'left'}>
          To create new paradigms in how people coordinate, organize, and work.
        </Text>
        <Text
          color='grey'
          fontSize={{ base: 'xl', md: 'lg', lg: 'xl' }}
          fontFamily='Clear Sans'
          mt={0}
          p={0}
          textAlign={'left'}>
          To be at the forefront of art and culture.
        </Text>
        <Text
          color='grey'
          fontSize={{ base: 'xl', md: 'lg', lg: 'xl' }}
          fontFamily='Clear Sans'
          mt={0}
          p={0}
          textAlign={'left'}>
          To provide alpha every day and every hour of the year.
        </Text>
      </Stack>
      <Flex align='center' justify='center'>
        <Box width={{ base: '100%', md: '60%' }}>
          <video controls autoPlay loop muted playsInline>
            <source
              src='https://openseauserdata.com/files/6eca99dd059a027eeac7125656ddca9c.mp4#t=0.001'
              type='video/webm'
            />
            Join Us
          </video>
        </Box>
      </Flex>
    </VStack>
  )
}
