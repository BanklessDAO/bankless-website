import React from 'react'
import Image from 'next/image'

import { Text, Link, Divider, Box, Flex } from '@chakra-ui/react'

interface I_Props {
  img: string
  title: string
  text: string
  href: string
}

class Card extends React.PureComponent<I_Props> {
  render() {
    return (
      <Box className='card'>

        <Box>
          <Image src={this.props.img} alt='image' width={600} height={400} />
        </Box>

        <Flex flexDir='column' className='card-bottom'>

          <Text className='card-title' fontSize='3xl' fontWeight={700}>
            {this.props.title.toUpperCase()}
          </Text>
          <Text className='card-text'>{this.props.text}</Text>

          <Divider className='card-divider' />

          <Link
            className='card-link'
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
          
        </Flex>
      </Box>
    )
  }
}

export default Card
