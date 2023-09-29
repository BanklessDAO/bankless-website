import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react'
import Underline from 'components/_common/underline'
import styles from 'styles/NavBar.module.css'

export default function NodesIntroComponent() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 4, md: 6 }}
        py={{ base: 10, md: 18 }}
        className={`${styles['header-text']}`}
      >
        <Heading
          fontWeight={700}
          fontSize={{ base: '4xl', sm: '5xl', md: '6xl', xl: '8xl' }}
          lineHeight={'110%'}
          color={'white.100'}
        >
          Portal to Nodes
          <Underline />
        </Heading>
        <Text color={'white.200'} fontSize={{ base: 'xl', md: '3xl' }}>
          BanklessDAO is only a part of a larger
          <Text
            color={'#D02128'}
            fontSize={{ base: 'xl', md: '3xl' }}
            display={'inline'}
          >
            {' '}
            &nbsp;ecosystem of nodes&nbsp;
          </Text>
          that amplify the
          <Text
            color={'white.200'}
            fontSize={{ base: 'xl', md: '3xl' }}
            display={{ base: 'inline', xl: 'block' }}
          >
            {' '}
            Bankless movement.
          </Text>
        </Text>
      </Stack>
      <Image
        width={'full'}
        height={{ base: '13rem', sm: '17rem', lg: '24rem' }}
        objectFit='cover'
        src='/bankless-website/images/ecosystem-nodes.jpg'
        alt='Photo by Go to Choong Deng Xiang on Unsplash'
      />
    </>
  )
}
