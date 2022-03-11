import React from 'react'
import Image from 'next/image'

import { Flex } from '@chakra-ui/react'

class Section1 extends React.Component {
  render() {
    return (
      <Flex
        className='section-container'
        flexDir='column'
        justifyContent='center'
        alignItems='center'>
        <Image
          src='/icons/bankless-square.jpg'
          height={250}
          width={250}
          alt='bankless-logo'
        />
      </Flex>
    )
  }
}

export default Section1
