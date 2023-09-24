import React from 'react'
import Section from 'components/about-us/section.tsx'
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
            title='Marketing Department'
            text='The Marketing Department is dedicated to amplifying the values of BanklessDAO, accomplishing this by delivering creative Web3 marketing solutions that effectively promote BanklessDAO initiatives, partners, and clients to their target audience with precision. Despite not yet adapting our own values, we remain aligned with those of the DAO.'
            img='/images/marketing-guild.png'
            alt='Marketing Department'
          />
          <Section
            title='Operations Department'
            text='The operations department is responsible for overseeing daily activities within the DAO, ensuring alignment with the general mission and vision, and facilitating core operations, budget management, and the seamless functioning of the community, all while upholding the values of inclusivity and cooperation.'
            img='/images/operation-guild.png'
            alt='Operations Department'
            reverse={true}
          />
          <Section
            title='Education Department'
            text='The Education Department serves as a cornerstone of empowerment within the DAO, taking an internal focus in its efforts to onboard new members, impart essential DAO tool knowledge, and offer informational sessions, all with the overarching goal of helping individuals become more effective participants in the BanklessDAO community.'
            img='/images/edu-guild.png'
            alt='Education Department'
          />
          <Section
            title='Treasury Department'
            text='The Treasury Department`s mission is to safeguard and improve the DAO`s financial infrastructure, driven by values such as transparency, integrity, responsibility, and accountability. Under Treasury Department Accounting, it oversees financial matters, reports, assets, budgets, and meticulous records to ensure responsible financial management.'
            img='/images/treasury-guild.png'
            alt='Treasury Department'
            reverse={true}
          />
        </VStack>
      </Flex>
    </Stack>
  )
}

export default Departments
