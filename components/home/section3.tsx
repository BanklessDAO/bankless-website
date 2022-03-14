import React from 'react';
import Image from 'next/image';

import { Flex, Text, Box, Button } from '@chakra-ui/react';

class Section3 extends React.Component {
  render() {
    return (
      <Flex flexDir='column' justifyContent='center' alignItems='center'>
        <Text
          fontSize='4xl'
          wordWrap='break-word'
          textAlign='center'
          fontWeight={700}
          marginTop={{ base: 39, lg: 25 }}
          width={{ base: '80%', lg: '60%' }}>
          {'Community-owned and operated through the:'.toUpperCase()}
        </Text>

        <div className='banner-underline'>&nbsp;</div>

        <Flex
          flexDirection={{ base: 'column', lg: 'row' }}
          justifyContent='space-evenly'
          width='100%'>
          <Flex
            height='fit-content'
            flexDirection='column'
            alignItems='center'
            margin={6}>
            <Box>
              <Image
                src='/icons/bankless-coin.png'
                alt='bankless-coin'
                height={200}
                width={200}
                objectFit='contain'
              />
            </Box>
            <Box>
              <Text fontSize='4xl' fontWeight={700}>
                BANK Token
              </Text>
            </Box>
          </Flex>
          <Flex
            height='fit-content'
            flexDirection='column'
            alignItems='center'
            margin={6}>
            <Box>
              <Image
                src='/icons/ethereum-icon.png'
                alt='ethereum-icon'
                height={200}
                width={200}
                objectFit='contain'
              />
            </Box>
            <Text fontSize='4xl' fontWeight={700}>
              Ethereum Blockchain
            </Text>
          </Flex>
        </Flex>

        <Box className='bank-banner'>
          <Box>
            <Text fontSize='3xl' color={'black'} fontWeight={700}>
              Onboarding 1 billion people, Minting 1 billion BANK tokens
            </Text>
          </Box>
          <Flex flexDirection={{ base: 'column', lg: 'row' }}>
            <Button
              size='lg'
              width={{ base: '100%', lg: '30%' }}
              margin='8px'
              onClick={() => null}>
              Buy Bank
            </Button>
            <Button
              size='lg'
              width={{ base: '100%', lg: '70%' }}
              margin='8px'
              variant='bankless-white'
              onClick={() => null}>
              BANK TOKEN LEGAL ASSESSMENT
            </Button>
          </Flex>
        </Box>

        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          justifyContent='center'
          alignItems='center'
          marginTop={{ base: 10, lg: 15 }}>
          <Flex flexDirection='row' marginRight={4}>
            <Box margin={5}>
              <Box className='shadow-left'>
                <Image
                  src='/profile-pics/david-hoffman.png'
                  height={150}
                  width={150}
                  alt='david-hoffman'
                />
              </Box>
            </Box>
            <Box margin={5}>
              <Box className='shadow-right'>
                <Image
                  src='/profile-pics/ryan-sean-adams.png'
                  height={150}
                  width={150}
                  alt='ryan-sean-adams'
                />
              </Box>
            </Box>
          </Flex>

          <Box width={{ base: '100%', lg: '60%' }}>
            <Text fontSize='3xl' color='rgba(255, 255, 255, 0.61)'>
              BanklessDAO was founded by{' '}
              <b style={{ color: 'white' }}>David Hoffman</b> and{' '}
              <b style={{ color: 'white' }}>Ryan Sean Adams</b> on May 4th,
              2021, when they airdropped 35,000 BANK tokens to each Bankless
              premium subscriber
            </Text>
          </Box>
        </Flex>

        <Box className='spacer'></Box>

        <Flex flexDir='row' justifyContent='center' alignItems='space-between'>
          <Text fontSize={{base: 'md', lg:'xl'}} color='rgba(255, 255, 255, 0.35)'>
            Following the true ethos of decentralization, they stepped back and
            let the DAO take shape. While their media company, Bankless LLC,
            continues to operate as its own media node, the Bankless brand is
            propagated through the DAO and its sub-DAOs. Now, the Bankless
            ecosystem as a whole creates user-friendly onramps for people to
            discover decentralized financial technologies through education,
            media and culture.
          </Text>
        </Flex>
      </Flex>
    )
  }
}

export default Section3
