import { Box, Heading, Text, Stack, Flex, Image, Link } from '@chakra-ui/react'
import Underline from 'components/common/underline'

export default function CommunityCallsIntroComponent() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 4, md: 7 }}
        py={{ base: 10, md: 18 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'110%'}
          color={'white.100'}>
          Community Calls
          <Underline />
        </Heading>

        <Text
          color={'grey'}
          fontSize={{ base: 'md', md: 'lg' }}
          textTransform={'uppercase'}>
          Join the entire Bankless community on Fridays at 4pm UTC
        </Text>

        <Text
          color={'white.200'}
          fontSize={{ base: 'md', md: 'lg' }}
          lineHeight={{ base: '1.5rem', md: '2rem' }}>
          Community Calls are the anchor of the BanklessDAO community. Every
          Friday at 4pm UTC we gather for one hour on the Community Call Voice
          Stage to hear key governance updates, share hype news, and have
          roundtable discussions on important topics in the DAO. For those
          unable to join our Discord, catch the live stream on{' '}
          <Link
            color='#D02128'
            href='https://www.twitch.tv/banklessdao'
            isExternal>
            BanklessDAO Twitch
          </Link>
          .
        </Text>
      </Stack>

      <Stack
        align='center'
        spacing={{ base: 8, md: 10 }}
        mt={{ base: 10, md: 15 }}
        direction={{ base: 'column', md: 'row' }}>
        <Flex
          justify={'center'}
          align={'center'}
          position={'relative'}
          flex={1}>
          <Box
            position={'relative'}
            rounded={'2xl'}
            overflow={'hidden'}
            width='100%'
            sx={{ height: { base: '300px', md: '450px' } }}>
            <Image
              position={'absolute'}
              alt={'Cryptocurrency Image'}
              left='0'
              top='40%'
              width={'3rem'}
              src={'/images/about-us/Cryptocurrency.png'}
            />
            <Image
              position={'absolute'}
              alt={'Bnakless Image'}
              right='10%'
              top='30%'
              width={'3rem'}
              src={'/images/about-us/Bnakless.png'}
            />
            <Image
              position={'absolute'}
              alt={'Aragon Image'}
              right='0'
              bottom='25%'
              width={'3rem'}
              src={'/images/about-us/Aragon.png'}
            />
            <Image
              position={'absolute'}
              alt={'Cryptocurrency Image'}
              right='30%'
              bottom='5%'
              width={'3rem'}
              src={'/images/about-us/Cryptocurrency1.png'}
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

        <Box flex={1}>
          <Stack
            flex={1}
            spacing={{ base: 5, md: 10 }}
            width={{ base: '100%', md: 'inherit' }}>
            <Heading
              color={'gray.100'}
              lineHeight={1.1}
              fontWeight={600}
              textAlign='center'
              textTransform={'uppercase'}
              fontSize={{ base: '1xl', sm: '2xl', md: '4xl' }}>
              Want Alpha?
            </Heading>
            <Text
              color={'gray.100'}
              textAlign='center'
              fontSize={{ sm: 'sm', md: 'md' }}>
              Join the weekly CCs!
            </Text>
          </Stack>
        </Box>
      </Stack>
    </>
  )
}
