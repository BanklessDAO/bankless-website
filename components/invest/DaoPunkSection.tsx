import React from 'react'
import Image from 'next/image'
import {
  Flex,
  Text,
  Container,
  VStack,
  Button,
  useMediaQuery,
  Box,
} from '@chakra-ui/react'

function DaoPunkSection() {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <Container maxW='container.xl' p={0}>
      <Flex direction={{ base: 'column', md: 'row' }} py={20}>
        <VStack p={10} spacing={10} align='center'>
          {isMobile ? (
            <Text fontWeight={700} fontSize='5xl' lineHeight='58px'>
              DAO Punks
            </Text>
          ) : null}
          <Image
            src='/images/DAO-Punk-Invest.png'
            alt='bankToken'
            height={533}
            width={525}
          />
        </VStack>
        <VStack spacing={10}>
          <Container>
            {!isMobile ? (
              <Text fontWeight={700} fontSize='5xl' lineHeight='58px'>
                DAO Punks
              </Text>
            ) : null}
            <Box>
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
            </Box>
          </Container>
          <Container
            display='flex'
            bottom={0}
            justifyContent={{ base: 'center', md: 'flex-start' }}>
            <Button
              onClick={() =>
                window.open(
                  'https://opensea.io/collection/daopunksnft',
                  '_blank'
                )
              }>
              Invest in DAO Punks
            </Button>
          </Container>
        </VStack>
      </Flex>
    </Container>
  )
}

export default DaoPunkSection
