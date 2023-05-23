import { Box, Heading, Text, Stack } from '@chakra-ui/react'
import Underline from 'components/_common/underline'
import styles from 'styles/NavBar.module.css'

export default function IntroComponent() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        display='flex'
        flexDir='column'
        alignItems='center'
        className={`${styles['header-text']}`}
      >
        <Heading
          fontWeight={700}
          width='15rem'
          fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
          lineHeight={'110%'}
          color={'white.100'}
        >
          Projects
          <Box height='5px' mb='26px'>
            <Underline />
          </Box>
        </Heading>

        <Text
          color={'white.200'}
          lineHeight={{ base: '30px', md: '40px' }}
          fontSize={{ base: '16px', md: '20px' }}
          width={{ base: '270px', sm: '400px', md: '600px', xl: '700px' }}
        >
          Projects enable Guilds and bDAO members to collaborate and scale the
          Bankless movement. From consultancy services to bot integrations to
          newsletters, we have multiple ongoing projects and more coming on the
          docket. Here are our current projects:
        </Text>
      </Stack>
    </>
  )
}
