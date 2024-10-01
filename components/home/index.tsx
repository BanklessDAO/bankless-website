import React from 'react'
import { VStack } from '@chakra-ui/react'

import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import NewsLetterAboutUs from 'components/_common/newsletter-section'
import SnapshotSection from './Snapshot/SnapshotSection'
import News from './news'

const Home = () => (
  <VStack rowGap='2rem'>
    <News />
    <Section1 />
    <Section2 />
    <Section3 />
    <SnapshotSection />
    <NewsLetterAboutUs />
  </VStack>
)

export default Home
