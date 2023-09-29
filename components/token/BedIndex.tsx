import {
  Flex,
  Text,
  Button,
  useMediaQuery,
  Image,
  Container,
  Stack,
  Box,
  Heading,
  Link,
  HStack,
} from '@chakra-ui/react'
import React from 'react'

function BedIndex() {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <Container maxW={'100%'} p={0}>
      <Stack
        align={'center'}
        spacing={3}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={0.7} fontWeight={600}>
            <Container
              p={0}
              maxW={{ base: 'container.sm', md: 'container.xl' }}
            >
              {/* Mobile logo begins */}
              {isMobile ? (
                <Flex mb={5} p={0}>
                  <Image
                    src='/bankless-website/images/bed-token.png'
                    alt='bed-token'
                    height={45}
                    width={45}
                  />
                  <Text m={2} fontWeight={700} fontSize='4xl'>
                    BED Index
                  </Text>
                </Flex>
              ) : (
                // Mobile logo ends
                <Text fontWeight={700} fontSize='5xl'>
                  BED Index
                </Text>
              )}
            </Container>
            <br />
            <Text as={'span'} color={'#D02128'}>
              The only index that can get ETH and BTC maxis in BED together
            </Text>
          </Heading>
          <Stack spacing={{ base: 4, sm: 6 }}>
            <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
              The Bankless BED Index is a passive investment vehicle weighted
              equally in Bitcoin, Ethereum, and the DeFi Pulse Index (DPI),
              which tracks high-usage DeFi assets. This index gives you exposure
              to crypto without having to constantly rebalance your portfolio.
              The fund is a cooperation between BanklessDAO and Index Coop, a
              provider of DeFi investment products.
            </Text>
          </Stack>
          <HStack justifyContent={'flex-end'} display='flex'>
            <Container
              padding={{ base: 0, md: 0, lg: 0 }}
              display='flex'
              justifyContent='space-between'
              alignItems={'center'}
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Link
                href='https://indexcoop.com/products/bankless-bed-index'
                isExternal
                style={{ textDecoration: 'none' }}
                mb={{ base: '22px', md: 0 }}
              >
                <Button fontWeight={800}>
                  <Container padding={0} paddingRight={2}>
                    <Image
                      src='/bankless-website/images/bed-token.png'
                      alt='bed-token'
                      height={23}
                      width={23}
                    />
                  </Container>
                  Learn more about BED Index
                </Button>
              </Link>
            </Container>
          </HStack>
        </Stack>
        {/* Desktop size Logo */}
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          {!isMobile ? (
            <Box pt={30} position={'relative'}>
              <Image
                alt='bed-token'
                align={'center'}
                height={310}
                width={310}
                src={'/bankless-website/images/bed-token.png'}
              />
            </Box>
          ) : null}
        </Flex>
      </Stack>
    </Container>
  )
}
export default BedIndex
