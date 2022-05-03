import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react'
import Underline from 'components/common/underline'

export default function NodesIntroComponent() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 4, md: 6 }}
        py={{ base: 10, md: 18 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'110%'}
          color={'white.100'}>
          Portal to Nodes
          <Underline />
        </Heading>
        <Text color={'white.200'} fontSize={{ sm: 'sm', md: 'md' }}>
          BanklessDAO is only a part of a larger
          <Text
            color={'red'}
            fontSize={{ sm: 'sm', md: 'md' }}
            display={'inline'}>
            {' '}
            &nbsp;ecosystem of nodes&nbsp;
          </Text>
          that amplify the Bankless movement.
        </Text>
      </Stack>
      <Image
        width={'full'}
        height={{ base: '13rem', sm: '17rem', lg: '24rem' }}
        objectFit='cover'
        src='/images/ecosystem-nodes.jpg'
        alt='Photo by Go to Choong Deng Xiang on Unsplash'
      />
    </>
  )
}
