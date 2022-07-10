import React from 'react'
import Section from './section'
import { Container, Flex, Text, VStack } from '@chakra-ui/react'
import Underline from 'components/_common/underline'

function Guild() {
  return (
    <Container maxW={{ base: 'container.sm', md: 'container.xl' }}>
      <Flex
        flexDir='column'
        justify='center'
        alignItems='center'
        lineHeight={{ base: '27px', md: '40px' }}
      >
        <Text fontWeight={700} fontSize='6xl' textAlign='center' maxW={750}>
          Guilds
        </Text>
        <Underline />
        <Text
          textAlign='center'
          mb={10}
          fontSize={{ base: 'xl', md: '2xl' }}
          maxW={826}
        >
          Guilds are the way we organize our contributors. These talent pools
          serve as a way for individuals who share common interests,
          professional backgrounds, and skills to come together and incubate
          projects. There are 13 guilds within bDAO.
        </Text>
        <VStack rowGap={8}>
          <Section
            title='Analytics Guild'
            text='The Analytics Guild builds data products and uses data analytics to equip
                    bDAO members to achieve our mission with data-driven intelligence.
                    The Analytics Guild also incubated DAO DASH.'
            img='/images/analytic-guild.png'
            alt='analytics-guild'
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
            text='The DAOlationships Guild facilitates and coordinates relationships between external organizations and
          the guilds within BanklessDAO.
          This guild helps us best represent our DAO to anyone outside bDAO.'
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
            title='Education guild'
            text='The Education Guild provides educational tools and resources to empower bDAO members with knowledge about Web3,
          DeFi, NFTs and the greater crypto ecosystem.
          They also incubated the Bankless Academy project.'
            img='/images/edu-guild.png'
            alt='education-guild'
            reverse={true}
          />
          <Section
            title='legal guild'
            text='The Legal Guild authored the BANK legal assessment and white paper.
           It also provides regular updates on the legal developments in crypto and DAO governance.
           They also incubated the Decentralized Law newsletter and legal podcast project.'
            img='/images/legal-guild.png'
            alt='legal-guild'
          />
          <Section
            title='marketing guild'
            text='The Marketing Guild amplifies the values and mission of BanklessDAO by delivering 
           creative Web3 marketing solutions to place the stakeholders in front of the right people with the right message.'
            img='/images/marketing-guild.png'
            alt='marketing-guild'
            reverse={true}
          />
          <Section
            title='Operations guild'
            text='The Operations Guild administers the daily activities of BanklessDAO and facilitates core operations,
           such as Community Calls and voting procedures.'
            img='/images/operation-guild.png'
            alt='operation-guild'
          />
          <Section
            title='Research guild'
            text='The Research Guild operates as a support node for conducting, guiding, and funding research that aligns with BanklessDAO’s mission.'
            img='/images/research-guild.png'
            alt='research-guild'
            reverse={true}
          />
          <Section
            title='Treasury guild'
            text="The Treasury Guild is responsible for preserving, enhancing, and supporting BanklessDAO's financial resources."
            img='/images/treasury-guild.png'
            alt='treasury-guild'
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
        </VStack>
      </Flex>
    </Container>
  )
}

export default Guild
