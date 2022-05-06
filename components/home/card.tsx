import React from 'react'
import Image from 'next/image'

import { Text, Link, Divider, Box, Flex } from '@chakra-ui/react'

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
        borderRadius='10px'
        background='#222222'
        height='100%'
        overflow='hidden'
        maxW={{ base: '300px', md: '400px' }}>

        <Box>
          <Image src={this.props.img} alt='image' width={600} height={400} />
        </Box>

        <Flex
          flexDir='column'
          height='100%'
          padding={{ base: 6, lg: 6 }}
        >

          <Text
            fontSize={{ base: 'xl', lg: '3xl' }}
            fontWeight={700}
            marginBottom={{ base: 6, lg: 18 }}>
            {this.props.title.toUpperCase()}
          </Text>
          <Text
            fontSize={{ base: 'md', lg: 'xl' }}
            color='rgba(255,255,255,0.57)'
            marginBottom={{ base: 12, lg: 30 }}
          >{this.props.text}</Text>

          <Divider marginTop='auto' />

          {this.props.pending ? 
            <Box 
            display='flex'
            alignItems='center'
            marginRight='2'
            marginTop='8'>
              <Text fontSize='sm' marginRight={2}>Coming Soon</Text>  
            </Box> : 
            <Link
              display='flex'
              alignItems='center'
              marginRight='2'
              marginTop='8'
              href={this.props.href}>
                  <Text fontSize='sm' marginRight={2}>Start</Text>
                  <Box>
                    <Image
                      src='/icons/arrow.png'
                      alt='arrow'
                      height={10}
                      width={10}
                    />
                  </Box>
            </Link>
          }


        </Flex>
      </Flex>
    )
  }
}

export default Card
