import React from 'react'
import Section from "./section"
import {
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react'
import Underline from 'components/common/underline'


function Guild() {
  return (
    <Flex width={'1199px'} flexDir='column' justify='center' alignItems='center' >
      <Text fontWeight={700} fontSize='6xl' textAlign='center' maxW={750}>
        Guilds
      </Text>
      <Underline />
      <Text textAlign='center' mb={10} fontSize={'2xl'} lineHeight={'46px'} height={183} maxW={826}>
        Guilds are the way we organize our contributors.
        These talent pools serve as a way for  individuals who share common interests, professional backgrounds,
        and skills to come together and incubate projects.
        There are 13 guilds within bDAO.
      </Text>
      <VStack spacing={100}>
        <Section
          titleRight="Analytics Guild"
          imgLeft="/images/analytic-guild.png"
          textRight="The Analytics Guild builds data products and uses data analytics to equip
                    bDAO members to achieve our mission with data-driven intelligence.
                    The Analytics Guild also incubated DAO DASH."
          titleLeft="Audiovisual Guild"
          textLeft="The AV Guild is the home of BanklessDAO video and audio content.
          From broadcasting the Community Call to building the next version of our audio-recording bot,
          bDAO contributors rely on the AV Guild for crisp, clear audio solutions for unifying contributors across time zones."
          imgRight="/images/eye-analytics.png"
        />
        <Section
          titleRight="DAOlationships Guild"
          imgLeft="/images/happy-faces.png"
          textRight="The DAOlationships Guild facilitates and coordinates relationships between external organizations and
          the guilds within BanklessDAO.
          This guild helps us best represent our DAO to anyone outside bDAO."
          titleLeft="Design Guild"
          textLeft="The DAOlationships Guild facilitates and coordinates relationships between external organizations and
          the guilds within BanklessDAO.
          This guild helps us best represent our DAO to anyone outside bDAO."
          imgRight="/images/design-guild.png"
        />
        <Section
          titleRight="developers guild"
          imgLeft="/images/dev-guild.png"
          textRight="The Developers Guild builds tooling, provides developer education, and helps developers do their best work in Web3.
          They also incubated the DEGEN,
          Gov-Bot, Mobile App and Bounty Board projects."
          titleLeft="Education guild"
          textLeft="The Education Guild provides educational tools and resources to empower bDAO members with knowledge about Web3,
           DeFi, NFTs and the greater crypto ecosystem.
           They also incubated the Bankless Academy project."
          imgRight="/images/edu-guild.png"
        />
        <Section
          titleRight="legal guild"
          imgLeft="/images/legal-guild.png"
          textRight="The Legal Guild authored the BANK legal assessment and white paper.
           It also provides regular updates on the legal developments in crypto and DAO governance.
           They also incubated the Decentralized Law newsletter and legal podcast project."
          titleLeft="marketing guild"
          textLeft="The Marketing Guild amplifies the values and mission of BanklessDAO by delivering 
          creative Web3 marketing solutions to place the stakeholders in front of the right people with the right message."
          imgRight="/images/marketing-guild.png"
        />
        <Section
          titleRight="Operations guild"
          imgLeft="/images/operation-guild.png"
          textRight="The Operations Guild administers the daily activities of BanklessDAO and facilitates core operations,
           such as Community Calls and voting procedures."
          titleLeft="Research guild"
          textLeft="The Research Guild operates as a support node for conducting, guiding, and funding research that aligns with BanklessDAO’s mission."
          imgRight="/images/research-guild.png"
        />
        <Section
          titleRight="Treasury guild"
          imgLeft="/images/treasury-guild.png"
          textRight="The Treasury Guild is responsible for preserving, enhancing, and supporting BanklessDAO's financial resources."
          titleLeft="Translators guild"
          textLeft="The Translators Guild spreads the Bankless mission across the world by translating our media into dozens of languages,
           then publishing them through the International Media Nodes."
          imgRight="/images/translators-guild.png"
        />
        <Section
          titleRight="Writers guild"
          imgLeft="/images/writers-guild.png"
          textRight="The Writers Guild is the umbrella for all writing projects coming out of the DAO. They incubated the Newsletter project,
           the Editing/Publishing Arm, and the Client Services project. "
        />
      </VStack >
    </Flex >
  )
}

export default Guild
