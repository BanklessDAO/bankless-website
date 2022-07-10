import React from 'react'
import { Box, Flex, Text, Image, VStack, extendTheme } from '@chakra-ui/react'

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
        flexDirection={{
          base: 'column',
          sm: 'column',
          xl: this.props.reverse ? 'row-reverse' : 'row',
        }}
        // flexDirection={{
        //   base: 'column',
        //   md: this.props.reverse ? 'row-reverse' : 'row',
        // }}
        columnGap={16}
      >
        <Box width={{base: '100%'}}>
        {/* <Box width={{ base: '100%', sm: '100%', md: '50%' }}> */}
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
          // width={{ base: '100%', sm: '100%', md: '50%' }}
          width={{base: '100%'}}
          rowGap={{ base: '8px', md: '57px' }}
          mt={{ base: '32px', md: '32px' }}
          textAlign='start'
          justifyContent='center'
          alignItems='start'
        >
          <Text fontSize={{ base: '18px', md: '30px' }} fontWeight={700}>
            {this.props.title.toUpperCase()}
          </Text>
          <Text fontSize={{ base: '12px', md: '28px'}}>{this.props.text}</Text>
        </VStack>
      </Flex>
    )
  }
}

export default Section
