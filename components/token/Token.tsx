import React from 'react'
import BankSection from './BankSection'
import LockedBANKSection from './LockedBANKSection'
import BedIndex from './BedIndex'
import GmiIndex from './GmiIndex'
import DaoPunkSection from './DaoPunkSection'
import Nfts from './Nfts'
import Deprecated from './Deprecated'
import Disclaimer from './Disclaimer'
import { Container } from '@chakra-ui/react'
import styles from 'styles/NavBar.module.css'

function Token() {
  return (
    <Container
      maxW={{ base: 'container.md', md: 'container.xl' }}
      className={`${styles['header-text']}`}
      p={0}
    >
      <BankSection />
      <LockedBANKSection />
      <BedIndex />
      <DaoPunkSection />
      <Nfts />
      <Deprecated />
      <GmiIndex />
      <Disclaimer />
    </Container>
  )
}

export default Token
