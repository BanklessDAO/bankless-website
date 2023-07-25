import React from 'react'
import Image from 'next/image'

import {
  Flex,
  Text,
  Container,
  VStack,
  Box,
  Link,
  useMediaQuery,
} from '@chakra-ui/react'

function LockedBANKSection() {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <Container maxW={'6xl'} p={0} pt='60px'>
      <Flex direction={{ base: 'column', xl: 'row' }}>
        <VStack spacing={4} align='flex-start'>
          <Text fontWeight={700} fontSize='7xl'>
            Time Locked BANK
          </Text>
          <Text fontSize='3xl' fontWeight={700} color={'#D02128'}>
            Long-term alignment{' '}
          </Text>
          <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
            Locking up BANK creates Time Locked BANK (tlBANK) and signals
            long-term alignment with BanklessDAO and it&apos;s mission. When you
            Lock BANK you receive a tlBANK NFT that represents the amount of
            BANK locked and grants Level 1 membership status for the duration of
            the lock period.  Only the address that mints the tlBANK is entitled
            to the Level 1 membership status and other future perks.
          </Text>
          <Box display={'flex'} flexDirection={{ base: 'row', md: 'column' }}>
            {isMobile ? (
              <Image
                src='/images/Tlbank.png'
                alt='bankToken'
                height={113}
                width={180}
              />
            ) : null}
            <Flex
              alignItems={{ base: 'center', md: 'center' }}
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Text mr={[0, 3]}>Lock up your BANK</Text>
              <Box>
                <Flex
                  justify={'center'}
                  align={'center'}
                  w={[160, 180]}
                  cursor={'pointer'}
                  border={'0.5px solid #D02128'}
                  _hover={{
                    bgColor: '#D02128',
                    '.available_here_text': {
                      color: 'white',
                    },
                  }}
                >
                  <Link
                    py={'5px'}
                    fontWeight={800}
                    className={'available_here_text'}
                    color='#D02128'
                    style={{ textDecoration: 'none' }}
                    href='https://bankless.community/tlBank'
                  >
                    Open App
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </VStack>
        {!isMobile ? (
          <VStack
            justifyItems={'center'}
            alignItems={'center'}
            h='full'
            w='full'
            mt={20}
            ml={10}
            align='flex-start'
          >
            <Image
              src='/images/Tlbank.png'
              alt='TlBank NFT'
              height={320}
              width={320}
            />
          </VStack>
        ) : null}
      </Flex>
    </Container>
  )
}
  export default LockedBANKSection
