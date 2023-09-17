import React from 'react'
import {
  Flex,
  Text,
  Box,
  Button,
  Image,
  Link,
  useMediaQuery,
} from '@chakra-ui/react'
import Underline from 'components/_common/underline'

function Section3() {
  const [isMobileScreen] = useMediaQuery('(max-width: 500px)')

  return (
    <Flex flexDir='column' justifyContent='center' alignItems='center'>
      <Text
        fontSize={{ base: 'md', sm: '2xl', md: '4xl' }}
        wordBreak={'break-word'}
        textAlign='center'
        fontWeight={700}
        marginTop={{ base: 39, lg: 100 }}
        width={{ base: '70%', xl: '60%' }}
      >
        {'Community-owned and operated through the:'.toUpperCase()}
      </Text>
      <Box w={'70%'}>
        <Underline />
      </Box>

      <Flex
        flexDirection='row'
        justifyContent='space-evenly'
        width='80%'
        m='2rem auto'
      >
        <Link
          href='https://bankless.community/token'
        >
          <Flex
            height='fit-content'
            flexDirection='column'
            alignItems='center'
            m={6}
            ml='1rem'
          >
            <Box height={200} width={150} pt='1rem'>
              <Image
                src='/bankless-website/public/icons/bankless-coin.png'
                alt='bankless-coin'
                height={{ base: 130, md: 200 }}
                width={{ base: 200, md: 250 }}
                objectFit='contain'
              />
            </Box>
            <Box>
              <Text
                fontSize={{ base: 'xl', lg: '2xl', xl: '4xl' }}
                mt={{ base: '0', sm: '2rem' }}
                textAlign={'center'}
                fontWeight={700}
              >
                BANK Token
              </Text>
            </Box>
          </Flex>
        </Link>
        <Link href={'https://ethereum.org/en/'}>
          <Flex
            height='fit-content'
            flexDirection='column'
            alignItems='center'
            my={6}
            mr='1rem'
          >
            <Box height={200} width={150} pt={'2rem'}>
              <Image
                src='/bankless-website/public/icons/ethereum-icon.png'
                alt='ethereum-icon'
                height={{ base: 100, md: 150 }}
                width={{ base: 150, md: 200 }}
                objectFit='contain'
              />
            </Box>
            <Text
              fontSize={{ base: 'xl', lg: '2xl', xl: '4xl' }}
              mt={{ base: '0', sm: '2rem' }}
              fontWeight={700}
              textAlign='center'
            >
              Ethereum Blockchain
            </Text>
          </Flex>
        </Link>
      </Flex>

      <Flex direction={'column'} alignItems='center' position={'relative'}>
        <Box
          position={'absolute'}
          top='-10'
          display={{ base: 'none', sm: 'none', md: 'block' }}
          width={'100.3%'}
          height={'3rem'}
          bgColor='white'
          filter='auto'
          blur='2px'
          bgGradient={
            'linear(to-t, rgba(255, 255, 255,10) 1%, rgba(0,0,0) 80%)'
          }
          clipPath={'polygon(5% -10%, 95% 0%, 100% 100%, 0% 100%)'}
        ></Box>
        <Flex
          height='fit-content'
          flexDir='column'
          justifyContent='center'
          alignItems='center'
          backgroundColor='white'
          borderRadius='10px'
          px={{ base: 2, sm: '5' }}
          py={5}
        >
          <Box>
            <Text
              fontSize={{ base: 'xl', md: '3xl' }}
              width={{ base: '16rem', sm: '26rem', md: '40rem', lg: '100%' }}
              my='1rem'
              px={{ base: '0rem', sm: '2rem', md: '5rem' }}
              color={'black'}
              fontWeight={700}
              textAlign='center'
            >
              Onboarding 1 billion people, Minting 1 billion BANK tokens
            </Text>
          </Box>
          <Flex flexDirection={{ base: 'column', lg: 'row' }}>
            <Button
              size={isMobileScreen ? 'sm' : 'md'}
              margin='8px'
              onClick={() =>
                window.open(
                  'https://app.uniswap.org/#/swap?inputCurrency=0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198&outputCurrency=ETH&chain=mainnet'
                )
              }
            >
              Buy Bank
            </Button>
            <Button
              size={isMobileScreen ? 'sm' : 'md'}
              margin='8px'
              variant='bankless-white'
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1WomKnCAaQTcNGh-VhPHKe-yUiyzXgSih/view'
                )
              }
            >
              BANK TOKEN LEGAL ASSESSMENT
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDir={{ base: 'column', xl: 'row' }}
        justifyContent='center'
        alignItems='center'
        marginTop={{ base: 10, lg: 20 }}
      >
        <Flex flexDirection='row' marginRight={{ base: 0, lg: 8 }}>
          <Box margin={5}>
            <Box
              borderRadius='100%'
              width='fit-content'
              boxShadow={{
                base: '-8px -1px 10px 2px #d02128',
                md: '-8px 0px 10px 5px #d02128',
              }}
            >
              <Image
                src='/bankless-website/public/profile-pics/david-hoffman.jpg'
                height={{ base: 100, sm: 150 }}
                width={{ base: 100, sm: 150 }}
                borderRadius='100%'
                alt='david-hoffman'
              />
            </Box>
          </Box>
          <Box margin={5}>
            <Box
              borderRadius='100%'
              width='fit-content'
              boxShadow={{
                base: '8px -1px 10px 2px #d02128',
                md: '8px 0px 10px 5px #d02128',
              }}
            >
              <Image
                src='/bankless-website/public/profile-pics/ryan-sean-adams.jpg'
                height={{ base: 100, sm: 150 }}
                width={{ base: 100, sm: 150 }}
                borderRadius='100%'
                alt='ryan-sean-adams'
              />
            </Box>
          </Box>
        </Flex>

        <Box
          mt={{ base: '3rem', sm: '3rem' }}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <Text
            fontSize={{ base: 'md', sm: '3xl' }}
            color='rgba(255, 255, 255, 0.61)'
            m={'0 auto'}
            width={{ base: '20rem', sm: '26rem', md: '33rem' }}
          >
            BanklessDAO was founded by{' '}
            <b style={{ color: 'white' }}>David Hoffman</b> and{' '}
            <b style={{ color: 'white' }}>Ryan Sean Adams</b> on May 4th, 2021,
            when they airdropped 35,000 BANK tokens to each Bankless premium
            subscriber
          </Text>
        </Box>
      </Flex>

      <Box
        mt={16}
        maxW={{ base: 600, lg: 1000 }}
        display={{ base: 'none', sm: 'block' }}
      >
        <Text
          fontSize={{ base: 'md', lg: 'xl' }}
          color='rgba(255, 255, 255, 0.35)'
        >
          Following the true ethos of decentralization, they stepped back and
          let the DAO take shape. While their media company, Bankless LLC,
          continues to operate as its own media node, the Bankless brand is
          propagated through the DAO and its sub-DAOs. Now, the Bankless
          ecosystem as a whole creates user-friendly onramps for people to
          discover decentralized financial technologies through education, media
          and culture.
        </Text>
      </Box>
    </Flex>
  )
}

export default Section3
