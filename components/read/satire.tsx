import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import {
  Flex,
  Text,
  Grid,
  GridItem,
  Box,
  Link,
  HStack,
  Stack,
} from '@chakra-ui/react'
import { RugLink } from './RugLink'

class Satire extends React.Component {
  render() {
    return (
      <Grid
        gridTemplateColumns={{ base: '1fr', xl: '16vw 1fr' }}
        alignItems='center'
        gap={8}
        mt={20}
        pl={{ base: 0, lg: '4rem' }}>
        <GridItem>
          <Flex flexDir='column' justifyContent='start' alignItems='start'>
            <Text
              fontWeight={700}
              fontSize={{ base: '4xl', md: '6xl' }}
              textAlign='center'
              maxW={750}
              fontFamily='Clear Sans'>
              The Rug
            </Text>
            <Text
              fontSize='xl'
              fontFamily='Clear Sans'
              color='grey'
              lineHeight='1.2'>
              A satire publication that takes money, seriously. Read and collect
              NFTs of their editions on
              <NextLink href='https://therug.mirror.xyz/' passHref={true}>
                <Link color='white' px='0.4rem' target='_blank'>
                  Mirror
                </Link>
              </NextLink>
              and follow along on
              <NextLink href='https://twitter.com/TheRugNews' passHref={true}>
                <Link color='white' href='' px='0.4rem' target='_blank'>
                  Twitter.
                </Link>
              </NextLink>
            </Text>
            <NextLink href='https://therug.mirror.xyz/' passHref={true}>
              <Link
                display='flex'
                alignItems='baseline'
                marginRight='2'
                marginTop='4'
                target='_blank'>
                <HStack gap={2}>
                  <Text
                    fontWeight={700}
                    fontSize='2xl'
                    marginRight='2'
                    textAlign='center'>
                    The Rug
                  </Text>
                </HStack>
                <Box marginLeft={2}>
                  <Image
                    src='/icons/arrow.png'
                    alt='arrow'
                    height={15}
                    width={15}
                  />
                </Box>
              </Link>
            </NextLink>
          </Flex>
        </GridItem>
        <GridItem>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            alignItems='flex-start'>
            <RugLink
              href='https://therug.mirror.xyz/'
              type='mirror'
              desc='Collect NFTs of Satire edition on Mirror.'
            />
            <RugLink
              href='https://twitter.com/TheRugNews'
              type='twitter'
              desc='Follow Satire on Twitter.'
            />
          </Stack>
        </GridItem>
      </Grid>
    )
  }
}

export default Satire
