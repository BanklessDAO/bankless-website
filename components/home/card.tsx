import React from 'react'
import Image from 'next/image'

import { Text, Link, Divider, Box, Flex } from '@chakra-ui/react'
import { ChakraNextImage } from 'components/_common/ChakraNextImage'

interface I_Props {
  img: string
  title: string
  text: string
  href: string
  pending?: boolean
}

class Card extends React.PureComponent<I_Props> {
  render() {
    return (
      <Flex
        flexDirection='column'
        borderRadius='1rem'
        background='#101010'
        height='40rem'
        overflow='hidden'
        // maxW={{ base: '300px', md: '400px' }}
      >
        <Box w='100%' h='50rem'>
          <ChakraNextImage
            src={this.props.img}
            alt='image'
            width='100%'
            height='100%'
          />
          {/* <Image src={this.props.img} alt='image' w='100%' h='100%' /> */}
        </Box>

        <Flex flexDir='column' height='100%' padding={{ base: 6, lg: 6 }}>
          <Text
            fontSize={{ base: '1.3rem', lg: '3xl' }}
            fontWeight={700}
            marginBottom={{ base: 6, lg: 18 }}>
            {this.props.title.toUpperCase()}
          </Text>
          <Text
            fontSize={{ base: 'md', lg: 'xl' }}
            color='rgba(255,255,255,0.57)'
            marginBottom={{ base: 12, lg: 30 }}>
            {this.props.text}
          </Text>

          <Divider marginTop='auto' />

          {this.props.pending ? (
            <Box
              display='flex'
              alignItems='center'
              marginRight='2'
              marginTop='8'>
              <Text fontSize='sm' marginRight={2}>
                Coming Soon
              </Text>
            </Box>
          ) : (
            <Link
              display='flex'
              alignItems='center'
              marginRight='2'
              marginTop='8'
              href={this.props.href}>
              <Text fontSize='sm' marginRight={2}>
                Start
              </Text>
              <Box>
                <Image
                  src='/icons/arrow.png'
                  alt='arrow'
                  height={10}
                  width={10}
                />
              </Box>
            </Link>
          )}
        </Flex>
      </Flex>
    )
  }
}

export default Card
