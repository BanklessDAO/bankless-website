import React from 'react'
import Section from 'components/about-us/section'
import { Box, Heading, Stack, Flex, Text, VStack } from '@chakra-ui/react'
import Underline from 'components/_common/underline'
import styles from 'styles/NavBar.module.css'

function Guild() {
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
          <Section
            title='Project Management Guild'
            text='A space for BanklessDAO creators to do their best work via project management best practices.
          We explore how PM best practices can be used within the web3 space and DAOs.'
            img='/images/project_management_guild.jpg'
            alt='project management guild'
          />
          <Section
            title='Audiovisual Guild'
            text='The AV Guild is the home of BanklessDAO video and audio content.
          From broadcasting the Community Call to building the next version of our audio-recording bot,
          bDAO contributors rely on the AV Guild for crisp, clear audio solutions for unifying contributors across time zones.'
            img='/images/eye-analytics.png'
            alt='av-guild'
            reverse={true}
          />
          <Section
            title='DAOlationships Guild'
            text='The DAOlationships Guild facilitates and coordinates relationships between external organizations and
          the guilds within BanklessDAO.
          This guild helps us best represent our DAO to anyone outside bDAO.'
            img='/images/happy-faces.png'
            alt='daolationship-guild'
          />
          <Section
            title='Design Guild'
            text='Clear communication of the DAO mission through intelligent next-gen design. We establish powerful symbols, build a
                  narrative through visual aid, and generate funding through art. We use integrity in our images and
                  content. As a culture, we reward action and embrace risk.'
            img='/images/design-guild.png'
            alt='design-guild'
            reverse={true}
          />
          <Section
            title='developers guild'
            text='The Developers Guild builds tooling, provides developer education, and helps developers do their best work in Web3.
          They also incubated the DEGEN,
          Gov-Bot, Mobile App and Bounty Board projects.'
            img='/images/dev-guild.png'
            alt='dev-guild'
          />

          <Section
            title='legal guild'
            text='The Legal Guild authored the BANK legal assessment and white paper.
           It also provides regular updates on the legal developments in crypto and DAO governance.
           They also incubated the Decentralized Law newsletter and legal podcast project.'
            img='/images/legal-guild.png'
            alt='legal-guild'
            reverse={true}
          />

          <Section
            title='Research guild'
            text='The Research Guild operates as a support node for conducting, guiding, and funding research that aligns with BanklessDAO’s mission.'
            img='/images/research-guild.png'
            alt='research-guild'
          />

          <Section
            title='Translators guild'
            text='The Translators Guild spreads the Bankless mission across the world by translating our media into dozens of languages,
           then publishing them through the International Media Nodes.'
            img='/images/translators-guild.png'
            alt='translator-guild'
            reverse={true}
          />
          <Section
            title='Writers guild'
            text='The Writers Guild is the umbrella for all writing projects coming out of the DAO. They incubated the Newsletter project,
           the Editing/Publishing Arm, and the Client Services project. '
            img='/images/writers-guild.png'
            alt='writers-guild'
          />
          <Section
            title='Analytics Guild (INACTIVE)'
            text='The Analytics Guild builds data products and uses data analytics to equip
                    bDAO members to achieve our mission with data-driven intelligence.
                    The Analytics Guild also incubated DAO DASH.'
            img='/images/analytic-guild.png'
            alt='analytics-guild'
            reverse={true}
          />
        </VStack>
      </Flex>
    </Stack>
  )
}

export default Guild
