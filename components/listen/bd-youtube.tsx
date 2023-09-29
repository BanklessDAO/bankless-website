import React from 'react'
import {Flex, Box, Text, VStack, Heading, HStack, Image, UnorderedList, ListItem} from '@chakra-ui/react'
import { CTAButton } from 'components/_common/CTAButton'
import { ChakraNextImage } from 'components/_common/ChakraNextImage'

const BdYoutube = () => (
    <>
        <Flex
            zIndex={'docked'}
            flexDirection={{ base: 'column', lg: 'row' }}
            justifyContent='start'
            alignItems='center'
            >
            <VStack
                mb='4rem'
                justifyContent='start'
                alignItems='start'
                rowGap='2rem'
                pt={{ base: 0, md: '8rem' }}
                pb={{ base: 0, md: '4rem' }}>
                <HStack>
                    <Heading
                        color={'white.100'}
                        lineHeight={1}
                        fontWeight={700}
                        fontFamily='Clear Sans'
                        fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}
                        zIndex='1'>
                        YouTube Channel
                    </Heading>
                    <Image
                        src='/bankless-website/images/youtube-logo-sm.png'
                        alt='bdao youtube channel'
                        height={24}
                        width={34}
                        objectFit='contain'
                    />
                </HStack>
                <Text
                    color={'grey'}
                    width={{ md: '25rem', lg: '32rem' }}
                    mx={'auto'}
                    fontSize={{ base: 'xl', lg: '2xl' }}
                    fontFamily='Clear Sans'
                    marginTop={'2rem'}
                    textAlign={'left'}>
                    The official BanklessDAO youtube channel
                    where you can find our:
                    <UnorderedList
                        mt={{ base: '0.5rem', md: '1rem' }}
                        fontStyle={'italic'}
                        fontSize={{ base: 'md', lg: 'lg' }}>
                        <ListItem>Community Calls</ListItem>
                        <ListItem>Weekly Rollups</ListItem>
                        <ListItem>BanklessDAO AMAs</ListItem>
                        <ListItem>Events Interviews</ListItem>
                    </UnorderedList>
                </Text>
                <CTAButton
                    url='https://www.youtube.com/@banklessdao'
                    text='Visit the Channel'
                    isExternal
                />
            </VStack>
            <HStack
                justifyContent='center'
                alignItems='center'
                rowGap='2rem'>
                <Box
                    display={{ base: 'none', lg: 'block' }}
                    mt={{ base: '-1rem', md: '-5rem', lg: '0rem' }}
                    ml={{ base: '0', md: '0', lg: '2rem' }}
                    mb={{ base: '5rem', md: '0' }}
                    height={{ base: '16rem', md: '15rem', lg: '20rem' }}
                    width={{ base: '16rem', md: '15rem', lg: '20rem' }}>
                    <ChakraNextImage
                        src='/bankless-website/images/bd-youtube.png'
                        alt='bdao youtube channel'
                        width={384}
                        height={269}
                    />
                    <Box
                        position='relative'
                        display={{ base: 'none', lg: 'block'}}
                        top={{ base: '-20rem', md: '-40rem', lg: '-15rem' }}
                        right={{ base: '0', sm: '0', md: '-2rem' }}
                        bgGradient='linear(to-br, #ec1b21ff 16.9%, #ec1b2133 70%)'
                        filter='auto'
                        blur='90px'
                        h={{ base: '30rem', sm: '20rem' }}
                        w={{ base: '60%', lg: '20rem' }}
                        borderRadius='full'
                        zIndex='-10000'
                    />
                </Box>
            </HStack>
        </Flex>
    </>
)

export default BdYoutube
