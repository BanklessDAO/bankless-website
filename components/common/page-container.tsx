import React from 'react'
import { Flex, Container } from '@chakra-ui/react'

import NavBar from './nav-bar'
import Footer from './footer'

type PageContainer = {
  children: React.ReactNode
}

const PageContainer: React.FC = ({ children }) => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      background={'black'}
      overflow='hidden'>
      <NavBar />
      <Container
        maxW={{ base: '100%', md: '700px', xl: '1232px' }}
        p={{ base: '2rem', md: 0 }}
        pt={{ base: 0 }}>
        {children}
      </Container>
      <Footer />
    </Flex>
  )
}

export default PageContainer
