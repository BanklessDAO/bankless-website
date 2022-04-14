import React from 'react'

import { Flex, Text, Box, Button, Image } from '@chakra-ui/react'
import Underline from 'components/common/underline'

class Section3 extends React.Component {
  render() {
    return (
      <Flex flexDir='column' justifyContent='center' alignItems='center'>
        <Text
          fontSize='4xl'
          wordBreak={'break-word'}
          textAlign='center'
          fontWeight={700}
          marginTop={{ base: 39, lg: 25 }}
          width={{ base: '80%', lg: '60%' }}
        >
          {'Community-owned and operated through the:'.toUpperCase()}
        </Text>

        <Underline />

        <Flex
          flexDirection={{ base: 'column', lg: 'row' }}
          justifyContent='space-evenly'
          width='100%'
        >
          <Flex
            height='fit-content'
            flexDirection='column'
            alignItems='center'
            margin={6}
          >
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
            margin={6}
          >
            <Box>
              <Image
                src='/icons/ethereum-icon.png'
                alt='ethereum-icon'
                height={200}
                width={200}
                objectFit='contain'
              />
            </Box>
            <Text fontSize='4xl' fontWeight={700} textAlign='center'>
              Ethereum Blockchain
            </Text>
          </Flex>
        </Flex>

        <Flex
          height='fit-content'
          mt={8}
          flexDir='column'
          justifyContent='center'
          alignItems='center'
          backgroundColor='white'
          width='90%'
          borderRadius='22px'
          p={4}
        >
          <Box>
            <Text
              fontSize='3xl'
              color={'black'}
              fontWeight={700}
              textAlign='center'
            >
              Onboarding 1 billion people, Minting 1 billion BANK tokens
            </Text>
          </Box>
          <Flex flexDirection={{ base: 'column', lg: 'row' }}>
            <Button
              size='lg'
              // width={{ base: '100%', md: '30%' }}
              margin='8px'
              onClick={() => window.open('https://app.uniswap.org/#/swap?inputCurrency=0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198&outputCurrency=ETH&chain=mainnet')}
            >
              Buy Bank
            </Button>
            <Button
              size='lg'
              // width={{ base: '100%', md: '70%' }}
              margin='8px'
              variant='bankless-white'
              onClick={() => window.open('https://drive.google.com/file/d/1WomKnCAaQTcNGh-VhPHKe-yUiyzXgSih/view')}
            >
              BANK TOKEN LEGAL ASSESSMENT
            </Button>
          </Flex>
        </Flex>

        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          justifyContent='center'
          alignItems='center'
          marginTop={{ base: 10, lg: 20 }}
        >
          <Flex flexDirection='row' marginRight={8}>
            <Box margin={5}>
              <Box
                borderRadius='100%'
                width='fit-content'
                boxShadow='-18px 8px 35px red'
              >
                <Image
                  src='/profile-pics/david-hoffman.jpg'
                  height={150}
                  width={150}
                  borderRadius="100%"
                  alt='david-hoffman'
                />
              </Box>
            </Box>
            <Box margin={5}>
              <Box
                borderRadius='100%'
                width='fit-content'
                boxShadow='18px 8px 35px red'
              >
                <Image
                  src='/profile-pics/ryan-sean-adams.jpg'
                  height={150}
                  width={150}
                  borderRadius="100%"
                  alt='ryan-sean-adams'
                />
              </Box>
            </Box>
          </Flex>

          <Box
            width={{ base: '100%', lg: '60%' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Text fontSize='3xl' color='rgba(255, 255, 255, 0.61)'>
              BanklessDAO was founded by{' '}
              <b style={{ color: 'white' }}>David Hoffman</b> and{' '}
              <b style={{ color: 'white' }}>Ryan Sean Adams</b> on May 4th,
              2021, when they airdropped 35,000 BANK tokens to each Bankless
              premium subscriber
            </Text>
          </Box>
        </Flex>

        <Box mt={16} maxW={{ base: 600, lg: 1000 }}>
          <Text
            fontSize={{ base: 'md', lg: 'xl' }}
            color='rgba(255, 255, 255, 0.35)'
          >
            Following the true ethos of decentralization, they stepped back and
            let the DAO take shape. While their media company, Bankless LLC,
            continues to operate as its own media node, the Bankless brand is
            propagated through the DAO and its sub-DAOs. Now, the Bankless
            ecosystem as a whole creates user-friendly onramps for people to
            discover decentralized financial technologies through education,
            media and culture.
          </Text>
        </Box>
      </Flex>
    )
  }
}

export default Section3
