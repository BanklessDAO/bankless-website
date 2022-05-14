import { Box, Heading, Text, Stack, Flex } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'

export default function JoinUsIntroComponent() {
  const pxBase = 0
  const pxLg = 40
  return (
    <>
      <Stack
        as={Box}
        textAlign={'left'}
        spacing={{ base: 4, md: 7 }}
        py={{ base: 10, md: 18 }}
        mt='4'
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', md: '3xl' }}
          lineHeight={'110%'}
          color={'white.100'}
          px={{ base: pxBase, lg: pxLg }}
        >
          Join Us
          <Container
            width='200px'
            filter='blur(5px)'
            mt={2}
            mb={2}
            ml={0}
            fontSize='16px'
            lineHeight='8px'
            background='linear-gradient(
                        91.88deg,
                        #ff1013 44.79%,
                        rgba(140, 29, 207, 0) 101.77%
                        )'
          >
            &nbsp;
          </Container>
        </Heading>
        <Text
          color={'grey'}
          px={{ base: pxBase, lg: pxLg }}
          fontSize={{ base: 'xl', md: '2xl' }}
        >
          This open and liberal financial system is just getting started. We’re
          building new economies, new ways to work, new thought leadership and
          scholarship, and new forms of art.
        </Text>

        <Text
          color={'white.100'}
          px={{ base: pxBase, lg: pxLg }}
          fontSize={{ base: 'xl', md: '2xl' }}
        >
          Join us and embark on our mission :
        </Text>
        <Text
          color={'grey'}
          lineHeight={'2rem'}
          px={{ base: pxBase, lg: pxLg }}
          marginTop='5px !important'
          fontSize={{ base: 'xl', md: '2xl' }}
        >
          To educate the masses in this new decentralized money system that
          anyone can use to build wealth and climb the economic ladder. <br />
          To create new paradigms in how people coordinate, organize, and work.{' '}
          <br />
          To be at the forefront of art and culture. <br />
          To provide alpha every day and every hour of the year.
        </Text>
      </Stack>
      <Flex mt={8} align='center' justify='center'>
        <Box width={{ base: '100%', md: '60%'}}>
        <video controls autoPlay loop  muted playsInline>
          <source src='https://openseauserdata.com/files/6eca99dd059a027eeac7125656ddca9c.mp4#t=0.001' type='video/webm'/>
          Join Us
        </video>
        </Box>
      </Flex>
    </>
  )
}
