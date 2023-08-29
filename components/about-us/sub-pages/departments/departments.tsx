import React from 'react'
import Section from './section'
import { Box, Heading, Stack, Flex, Text, VStack } from '@chakra-ui/react'
import Underline from 'components/_common/underline'
import styles from 'styles/NavBar.module.css'

function Departments() {
  return (
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
        Departments
        <Box margin='1rem auto' width={{ base: '90%', sm: '100%' }}>
          <Underline />
        </Box>
      </Heading>

      <Flex
        flexDir='column'
        justify='center'
        alignItems='center'
        lineHeight={{ base: '30px', md: '40px' }}
      >
        <Text
          textAlign='center'
          mb={10}
          fontSize={{ base: '18px', md: '28px' }}
          maxW={826}
          lineHeight={{ base: '40px', md: '46px' }}
          fontWeight='400px'
          zIndex={1}
        >
          Departments are operation-critical units of BanklessDAO. The
          qualification test for a department is that if it does not exist, the
          DAO cannot function properly or may cease to exist!
        </Text>
        <VStack mt={8} rowGap={8}>
          <Section
            title='Treasuary'
            text='The Treasury Department is responsible for preserving, enhancing and supporting the financial and economic infrastructure of the DAO.'
            img='/images/project_management_guild.jpg'
            alt='project management guild'
          />
          <Section
            title='Operations'
            text='Watch over daily activities of the DAO, so everyone is aligned with the general mission and vission of the DAO'
            img='/images/eye-analytics.png'
            alt='av-guild'
            reverse={true}
          />
          <Section
            title='Marketing'
            text='Our mission is to amplify the values of BanklessDAO, by delivering creative Web3 marketing solutions to help the BanklessDAO initiatives, partners, and clients get in front of the right people with the right message.
          This guild helps us best represent our DAO to anyone outside bDAO.'
            img='/images/happy-faces.png'
            alt='daolationship-guild'
          />
          <Section
            title='Education'
            text='The Education Department plays a key role in the empowerment of DAO members through:

            - onboarding new joiners,
            
            - teaching DAO tooling that members need to familiarize themselves with in order to succeed in the DAO space, and
           
            - hosting informational sessions for those looking to further their crypto exploration beyond the introductory level.'
            img='/images/design-guild.png'
            alt='design-guild'
            reverse={true}
          />
        </VStack>
      </Flex>
    </Stack>
  )
}

export default Departments
