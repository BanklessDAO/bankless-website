import React from 'react'
import Image from 'next/image'
import { Flex, Text, Container, VStack, Button, Box, Link } from '@chakra-ui/react'

function GmiIndex() {
  return (
    <Container maxW={{ base: 'container.sm', md: 'container.lg' }} p={0}>
      <Flex flexDirection={{ base: 'column', md: 'row' }} py={10}>
        <VStack spacing={10}>
          <Container
            display={'flex'}
            flexDirection={'column'}
            ml={['auto', 0]}
            width={['80%', '100%']}>
            <Text
              textAlign={{ base: 'center', md: 'left' }}
              fontWeight={700}
              fontSize='5xl'>
              GMI INDEX
            </Text>
            <Flex justify={{ base: 'center', md: 'flex-start' }}>
              <Box ml={0} width={75} height={'12px'} background={'red'} />
              <Box ml={2} width={75} height={'12px'} background={'red'} />
              <Box ml={2} width={75} height={'12px'} background={'red'} />
            </Flex>
            <Text
              textAlign={{ base: 'center', md: 'left' }}
              color={'#D02128'}
              lineHeight='43px'
              fontSize='36px'
              fontWeight={700}>
              Are you GMI?
            </Text>
          </Container>
          <Container>
            <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
              The Bankless DeFi Innovation Index, called the GMI Index for the
              rally cry “we’re all gonna make it” is another investment vehicle
              springing from the Index Coop/BanklessDAO partnership. Like the
              BED Index, GMI captures a broad swath of DeFi exposure while also
              tapping into gains from sophisticated products such as
              yield-bearing tokens.
            </Text>
          </Container>
        </VStack>
        <VStack justifyContent={'flex-end'} display='flex' p={10} spacing={10}>
          <Container
            display='flex'
            justifyContent='space-evenly'
            alignItems={'center'}
            flexDirection={{ base: 'column', md: 'row' }}>
            <Link href='https://app.indexcoop.com/gmi' isExternal>
              <Button as='a' textDecorationLine={'none'}>
                <Container padding={0} paddingRight={2}>
                  <Image
                    src='/images/bed-token.png'
                    alt='bed-token'
                    height={23}
                    width={23}
                  />
                </Container>
                Invest in GMI index
              </Button>
            </Link>
          </Container>
        </VStack>
      </Flex>
    </Container>
  )
}

export default GmiIndex
