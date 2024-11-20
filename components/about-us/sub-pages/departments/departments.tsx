import React from 'react'
import Section from 'components/_common/section'
import { Box, Heading, Stack, Flex, Text, VStack } from '@chakra-ui/react'
import Underline from 'components/_common/underline'
import styles from 'styles/NavBar.module.css'
import { DEPARTMENTS } from 'constants/data'

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
          {DEPARTMENTS.map((department, index) => (
            <Section
              project={department}
              reverse={index % 2 === 1}
              key={`department-${index}`}
            />
          ))}
        </VStack>
      </Flex>
    </Stack>
  )
}

export default Departments
