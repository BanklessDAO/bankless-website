import {
  Flex,
  Text,
  Button,
  useMediaQuery,
  VStack,
  Image,
  Container,
  Stack,
  Box,
  Heading,
  Link
} from '@chakra-ui/react'

function BedIndex() {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <Container maxW={'6xl'} p={0}>
      <Stack
        align={'center'}
        spacing={3}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={0.7} fontWeight={600}>
            <Container maxW={{ base: 'container.sm', md: 'container.xl' }}>
              {/* Mobile logo begins */}
              {isMobile ? (
                <Flex mb={5} p={0}>
                  <Image
                    src='/images/bed-token.png'
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
            <Text as={'span'} color={'red.400'}>
              The only index that can get ETH and BTC maxis in BED together
            </Text>
          </Heading>
          <Stack spacing={{ base: 4, sm: 6 }}>
            <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
              The Bankless BED Index is a passive investment vehicle weighted
              equally in Bitcoin, Ethereum, and the DeFi Pulse Index (DPI),
              which tracks high-usage DeFi assets. This index gives you exposure
              to crypto without having to research DeFi projects or constantly
              rebalance your portfolio. This is a great first crypto investment
              for anyone just starting their crypto journey. The fund is a
              cooperation between BanklessDAO and Index Coop, a provider of DeFi
              investment products.
            </Text>
          </Stack>
          <VStack justifyContent={'flex-end'} display='flex'>
            <Container
              display='flex'
              justifyContent='space-evenly'
              alignItems={'center'}
              flexDirection={{ base: 'column', md: 'row' }}>
              <Link href='https://app.indexcoop.com/bed' isExternal>
                <Button as='a' textDecorationLine={'none'} fontWeight={800}>
                  <Container padding={0} paddingRight={2}>
                    <Image
                      src='/images/bed-token.png'
                      alt='bed-token'
                      height={23}
                      width={23}
                    />
                  </Container>
                  Invest in BED index
                </Button>
              </Link>
              <Link href='https://www.bankless.community/bed-index' isExternal>
                <Button as='a' textDecorationLine={'none'} fontWeight={800}>
                  <Container padding={0} paddingRight={2}></Container>
                  Learn more about Bed Index
                </Button>
              </Link>
            </Container>
          </VStack>
        </Stack>
        {/* Desktop size Logo */}
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          {!isMobile ? (
            <Box position={'relative'}>
              <Image
                alt='bed-token'
                align={'center'}
                height={310}
                width={310}
                src={'/images/bed-token.png'}
              />
            </Box>
          ) : null}
        </Flex>
      </Stack>
    </Container>
  )
}
export default BedIndex
