import React from 'react'
import { Flex } from '@chakra-ui/react'

import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';

class Home extends React.Component {
  render() {
    return (
      <Flex
        className='section-container'
        flexDir='column'
        justifyContent='center'
        alignItems='center'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </Flex>
    )
  }
}

export default Home
