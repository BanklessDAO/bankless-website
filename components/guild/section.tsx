import React from 'react';
import { Box, Flex, Text, Image, VStack } from '@chakra-ui/react';

interface I_SectionProps {
  alt: string
  img: string
  title: string
  text: string
  reverse?: boolean
}

class Section extends React.Component<I_SectionProps> {

  render() {
    return (
      <Flex 
        flexDirection={{ base: 'column', md: this.props.reverse ? 'row-reverse' : 'row' }}
        columnGap={16}
        >
        <Box width={{ base: '100%', md: '50%'}}>
          <Image
            alt={this.props.alt}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={this.props.img}
          />
        </Box>

        <VStack 
          width={{ base: '100%', md: '50%'}}
          rowGap={{ base: 8, md: 16 }}
          textAlign='start'
          justifyContent='center'
          alignItems='start'>
          <Text fontSize={{base: '2xl'}} fontWeight={700}>{this.props.title.toUpperCase()}</Text>
          <Text fontSize='md'>{this.props.text}</Text>
        </VStack>
      </Flex>
    )
  }
}

export default Section