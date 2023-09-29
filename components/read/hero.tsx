import React from 'react'

import { Box, Flex, Text, HStack, VStack, Heading } from '@chakra-ui/react'
import { ChakraNextImage } from 'components/_common/ChakraNextImage'
import { ArticleLink } from './ArticleLink'

class Hero extends React.Component {
  render() {
    return (
      <Flex
        flexDirection='column'
        justifyContent='start'
        alignItems='start'
        rowGap='1rem'
      >
        <HStack position='relative'>
          <VStack
            alignItems='start'
            width={{ base: '100%', md: '64%', xl: '60%' }}
            rowGap='1rem'
            pt={{ base: 0, md: '8rem' }}
            pb={{ base: 0, md: '2rem' }}
          >
            <Heading
              color={'white.100'}
              lineHeight={1}
              fontWeight={700}
              fontFamily='Clear Sans'
              fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}
              zIndex='1'
            >
              Decentralizing media one article at a time
            </Heading>
            <Text
              color='grey'
              fontFamily='Clear Sans'
              fontSize='2xl'
              lineHeight={1.2}
            >
              BanklessDAO is building the first decentralized publishing house
              ever. Our newsletters and articles are translated into a variety
              of languages to reach a global audience. Find your crypto reading
              materials right here.
            </Text>
          </VStack>

          <Box
            display={{ base: 'none', md: 'flex' }}
            position='absolute'
            right={{ base: '-10%', lg: '-10%', xl: '8%' }}
            top={{ base: '10rem', lg: '2rem', xl: '-3rem' }}
          >
            <ChakraNextImage
              src='/bankless-website/read/pen-01.png'
              height={{ base: '22rem', xl: '22rem' }}
              width={'22rem'}
              alt='Bhutan'
              zIndex={1}
            />
            <Box
              height={'11rem'}
              width={'11rem'}
              pos='absolute'
              zIndex='0'
              left={{ base: '48%', lg: '40%' }}
              bottom={{ base: '45%', lg: '35%' }}
              opacity='0.5'
              bgGradient='linear-gradient(121.75deg, rgba(255, 16, 19, 0.6) 58%, rgba(140,29,207,0.6) 0%)'
              filter='blur(6rem)'
            />
          </Box>
        </HStack>

        <Flex
          flexDirection={{ base: 'column', xl: 'row' }}
          columnGap={8}
          rowGap={8}
          pt={{ base: '3rem', md: '8rem' }}
          pl={{ base: 0, xl: '4rem' }}
          position='relative'
          w={{ base: '100%', lg: '70%' }}
        >
          <ArticleLink
            type='medium'
            url='https://medium.com/bankless-dao'
            desc='Crypto and Web3 commentary representing the voice of the DAO.'
          />

          <ArticleLink
            type='mirror'
            url='https://banklessdao.mirror.xyz/'
            desc='BanklessDAO history and season recaps posted publicly.'
          />

          <ArticleLink
            type='publish'
            url='https://banklesspublishing.com/'
            desc="Bankless Publishing creates and curates top-shelf educational Web3 content for a broad audience of crypto-interested readers. We also work with crypto's leading protocols to help them get their message out to our audience. Whether you're a writer or protocol team, we're interested in talking with you."
          />

          <Box
            height={'18rem'}
            width={'18rem'}
            bgGradient='linear-gradient(121.75deg, rgba(255, 16, 19, 0.4) 58%, rgba(140, 29, 207, 0.6) 0%)'
            position='absolute'
            left={{ base: '20%', lg: '10%' }}
            bottom={{ base: '20%', lg: '0%' }}
            zIndex='0'
            filter='blur(6rem)'
            opacity={0.3}
            transform={'rotate(9.1deg)'}
          />
        </Flex>
      </Flex>
    )
  }
}

export default Hero
