import { Box, Heading, Text, Stack } from '@chakra-ui/react'
import Underline from 'components/_common/underline'

export default function IntroComponent() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 10, md: 18 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'110%'}
          color={'white.100'}
        >
          Projects
          <Underline />
        </Heading>

        <Text color={'white.200'} fontSize={{ sm: 'sm', md: 'md' }}>
          Projects enable Guilds and bDAO members to collaborate and scale the
          Bankless movement. From consultancy services to bot integrations to
          newsletters, we have multiple ongoing projects and more coming on the
          docket. Here are our current projects:
        </Text>
      </Stack>
    </>
  )
}
