import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'

class VisionSection extends React.Component {
  render() {
    return (
      <Flex
        width={['90%', '100%']}
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        mt={['2.5rem']}
      >
        <Text
          align={'center'}
          fontSize={['3xl', '4xl']}
          fontWeight={700}
          width={['95%', '85%']}
        >
          {'Our Vision is to make financial independence, decentralized work, and creative freedom accessible to all'.toUpperCase()}
        </Text>
        <Box
          w='40%'
          h='9px'
          bgGradient='linear(to right, #FF1013 44.79%, rgba(140, 29, 207, 0.2) 101.77%, rgba(255,0,0,0))'
          mb={'30px'}
          mt={'20px'}
          blur={'5px'}
          filter={'blur(5px)'}
          backdropFilter='auto'
          backdropBlur='5px'
        />
        <Text width={['100%', '50%']} color='white.900' align={'center'}>
          We work to build a world where anyone with an internet connection has
          access to the tools needed to achieve financial independence. We want
          everyone to be able to open a computer, find a DAO, start working, and
          get paid. We want to enable visionaries to unlock their true creative
          freedom with the power of Web3.
        </Text>
      </Flex>
    )
  }
}

export default VisionSection
