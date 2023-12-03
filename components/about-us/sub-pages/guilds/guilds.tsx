import React from 'react'
import Section from 'components/_common/section'
import { Box, Heading, Stack, Flex, Text, VStack } from '@chakra-ui/react'
import Underline from 'components/_common/underline'
import styles from 'styles/NavBar.module.css'
import { GUILDS } from 'constants/data'

function Guilds() {
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
        Guilds
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
          Guilds are the way we organize our contributors. These talent pools
          serve as a way for individuals who share common interests,
          professional backgrounds, and skills to come together and incubate
          projects. There are 13 guilds within bDAO.
        </Text>
        <VStack mt={8} rowGap={8}>
          {GUILDS.map((guild, index) => (
            <Section
              project={guild}
              reverse={index % 2 === 1}
              key={`guild-${index}`}
            />
          ))}
        </VStack>
      </Flex>
    </Stack>
  )
}

export default Guilds
