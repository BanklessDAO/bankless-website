import React from 'react'
import {
  Stack,
  Text,
  Container,
  HStack,
  VStack,
  Button,
  Link,
} from '@chakra-ui/react'

function GmiIndex() {
  return (
    <Container>
      <Stack spacing={{ base: 5, md: 10 }}>
        <VStack spacing={10}>
          <Container
            display={'flex'}
            flexDirection={'column'}
            ml={['auto', 0]}
            width={['80%', '100%']}
          >
            <Text
              textAlign={{ base: 'center', md: 'left' }}
              color={'#D02128'}
              lineHeight='43px'
              fontSize='36px'
              fontWeight={700}
              mt={7}
            >
              GMI Index
            </Text>
          </Container>
          <Container>
            <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
              The Bankless DeFi Innovation Index, called the GMI Index was
              another investment vehicle springing from the Index Coop/BanklessDAO
              partnership. However, it did not find product-market fit and was
              deprecated on October 27, 2022.
            </Text>
          </Container>
          <HStack spacing='24px' justifyContent={'flex-start'} display='flex'>
            <Link
              href='https://indexcoop.com/blog/deprecation-of-data-gmi-mnye-and-polygon-flis'
              isExternal
              style={{
                textDecoration: 'none',
              }}
            >
              <Button as='a'>
                GMI Deprecation Notice
              </Button>
            </Link>
            <Link
              href='https://legacyproducts.indexcoop.com/'
              isExternal
              style={{
                textDecoration: 'none',
              }}
              >
              <Button as='a'>
                Redeem GMI
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Stack>
    </Container>
  )
}

export default GmiIndex
