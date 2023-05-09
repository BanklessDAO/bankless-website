import { Box, Heading, Text, Stack, Flex, Link } from '@chakra-ui/react'
import Underline from 'components/_common/underline'
import styles from 'styles/NavBar.module.css'

export default function GovernanceIntroComponent() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 2, md: 6 }}
        py={{ base: 10, md: 18 }}
        position='relative'
        zIndex='docked'
        className={`${styles['header-text']}`}
      >
        <Heading
          fontWeight={700}
          fontSize={{
            base: '2.7rem',
            sm: '6xl',
            md: '7xl',
            lg: '7xl',
          }}
          lineHeight={'120%'}
          color={'white.100'}
        >
          Governance
          <Box margin='1rem auto' width={{ base: '90%', sm: '100%' }}>
            <Underline />
          </Box>
        </Heading>

        <Flex flexDirection='column' alignItems='center'>
          <Text
            color={'grey'}
            fontSize={{ sm: 'sm', md: 'lg' }}
            textTransform={'uppercase'}
            mb='1rem'
          >
            Governance is everyone’s responsibility at BanklessDAO
          </Text>
          <Text
            color={'white.200'}
            fontSize={{ sm: 'sm', md: 'lg' }}
            maxW={{ sm: '30rem', md: '35rem', lg: '50rem' }}
            my='1rem'
          >
            At BanklessDAO, decisions related to the governance process,
            treasury allocation, and organizational structure are made using{' '}
            <Link
              href={'https://docs.snapshot.org/'}
              isExternal
              color='#D02128'
            >
              Snapshot
            </Link>
            , an off-chain token-weighted voting platform. Any BANK token holder
            can vote in a Snapshot poll. The more tokens they hold, the more
            voting power they have. To see our recent governance decisions,
            visit the{' '}
            <Link
              href={'https://snapshot.org/#/banklessvault.eth'}
              isExternal
              color='#D02128'
            >
              BanklessDAO Snapshot
            </Link>{' '}
            space.
          </Text>
          <Box>
            <Text
              color={'white.200'}
              fontSize={{ sm: 'sm', md: 'lg' }}
              maxW={{ sm: '30rem', md: '35rem', lg: '50rem' }}
            >
              Before a decision can be put on Snapshot, it must first be posted
              to the{' '}
              <Link
                href={'https://forum.bankless.community/'}
                isExternal
                color='#D02128'
              >
                BanklessDAO Forum
              </Link>
              . And before that, it is common to discuss decisions in the{' '}
              <Link
                href={'https://discord.com/invite/bankless'}
                isExternal
                color='#D02128'
              >
                BanklessDAO Discord
              </Link>
              .
            </Text>
          </Box>
        </Flex>
      </Stack>
      <Box
        position='absolute'
        top={{ base: '0rem', sm: '0rem', md: '20rem' }}
        left={{ base: '0', sm: '0', md: '2%', lg: '5%', xl: '10%' }}
        bgGradient='linear(to-br, rgba(255, 16, 19, 0.3) 16.9%, rgba(140, 29, 207, 0.1) 88.02%)'
        filter='auto'
        blur='180px'
        h='55rem'
        w={{ base: '70%', lg: '50rem' }}
        borderRadius='full'
      ></Box>
    </>
  )
}
