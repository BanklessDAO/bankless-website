import React from 'react'
import BankSection from './BankSection'
import BedIndex from './BedIndex'
import GmiIndex from './GmiIndex'
import DaoPunkSection from './DaoPunkSection'
import NftInvest from './NftInvest'
import { Container } from '@chakra-ui/react'
import styles from 'styles/NavBar.module.css'

function Invest() {
  return (
    <Container
      maxW={{ base: 'container.md', md: 'container.xl' }}
      className={`${styles['header-text']}`}
      p={0}
    >
      <BankSection />
      <BedIndex />
      <GmiIndex />
      <DaoPunkSection />
      <NftInvest />
    </Container>
  )
}

export default Invest
