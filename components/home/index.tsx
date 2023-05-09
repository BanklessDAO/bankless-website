import React from 'react'
import { VStack } from '@chakra-ui/react'

import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'
import NewsLetterAboutUs from 'components/_common/newsletter-section'
import SnapshotSection from './Snapshot/SnapshotSection'

const Home = () => (
  <VStack rowGap='2rem'>
    <Section1 />
    <Section2 />
    <Section3 />
    {/* <Section4 /> */}
    <SnapshotSection />
    <NewsLetterAboutUs />
  </VStack>
)

export default Home
