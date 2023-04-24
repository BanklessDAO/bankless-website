import React from 'react'
// import Image from 'next/image'
import {
  Text,
  Container,
  VStack,
  Button,
  useMediaQuery,
  Box,
  Stack,
  Link,
  Image,
} from '@chakra-ui/react'

function DaoPunkSection() {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <Container maxW={'6xl'} p={0} display={'flex'} justifyContent={'center'}>
      <Stack
        align={'right'}
        spacing={10}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        {isMobile ? (
          <Text
            fontWeight={700}
            fontSize='5xl'
            lineHeight='58px'
            paddingX={{ base: '15%', md: '0' }}
          >
            DAO Punks
          </Text>
        ) : null}
        <Container width={'100%'} alignSelf={'center'}>
          <Image
            src='/images/DAO-Punk-Invest.png'
            alt='bankToken'
            height={{ base: '100%', md: '300px' }}
            width='450px'
            maxW={'10000000px'}
            paddingX={{ base: '15%', md: '0' }}
          />
        </Container>
        <VStack justifyContent={'flex-start'} display='flex'>
          <Container flexDirection={{ base: 'column', md: 'row' }}>
            {!isMobile ? (
              <Text fontWeight={700} fontSize='5xl' lineHeight='58px' mb={7}>
                DAO Punks
              </Text>
            ) : null}
            <Box
              boxSize={{ base: '100%', md: '400px' }}
              paddingX={{ base: '15%', md: '0' }}
            >
              <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
                DAOpunks launched in 2021 with the mission of helping to free
                all humans from the soul-sucking drudgery of default world work.
                They do that work through providing grants to those who seek to
                leave the CORPrat life for the meaningful work found in DAOs.
                Holders of a DAOpunk NFT enjoy access to gated channels, but the
                community is open to anyone with an interest in DAOs. In
                addition to grants, the DAOpunks have a newsletter, podcast, and
                merch arm, and are always spinning new ideas into actionable
                content. DAOpunks is at the edge of DAO governance, and is
                pushing the boundaries of where technology meets on-chain voting
                and automatic treasury triggers.
              </Text>
              <Container p={0} mt={8}>
                <Link
                  href='https://opensea.io/collection/daopunksnft'
                  isExternal
                  style={{ textDecoration: 'none' }}
                >
                  <Button as='a' textDecorationLine={'none'} fontWeight={800}>
                    Invest in DAO Punks
                  </Button>
                </Link>
              </Container>
            </Box>
          </Container>
        </VStack>
      </Stack>
    </Container>
  )
}

export default DaoPunkSection
