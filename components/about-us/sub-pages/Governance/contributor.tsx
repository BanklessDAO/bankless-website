import { Box, Heading, Text, Stack, SimpleGrid, Flex } from '@chakra-ui/react'

export default function GovernanceContributorComponent() {
  return (
    <>
      <Stack
        as={Box}
        spacing={{ base: 4, md: 6 }}
        py={{ base: 10, md: 18 }}
        mt={'4rem'}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          lineHeight={'110%'}
          color={'white.100'}
          textAlign={'center'}
        >
          CONTRIBUTOR LEVELS
        </Heading>

        <Text color={'grey'} fontSize={{ sm: 'sm', md: 'lg' }}>
          Membership delineation is an important aspect of governance.
          BanklessDAO server members fit into these categories:
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Flex align={'center'} mb={3} position='relative'>
              <Box
                h='3rem '
                w='3rem'
                borderRadius={'full'}
                filter='auto'
                blur='20px'
                bgColor='#D02128'
                position={'absolute'}
              ></Box>
              <Text
                fontFamily={'heading'}
                fontSize={'xl'}
                color={'white'}
                fontWeight={'bold'}
                zIndex='docked'
              >
                Guest Pass:
              </Text>
            </Flex>

            <Text fontSize={'md'} color={'gray.400'}>
              An individual who does not yet have 35,000 BANK in their wallet.
              This person can participate in the DAO for free, but must have
              their pass renewed every two weeks by a Level 2 (L2) contributor.
            </Text>
          </Box>

          <Box>
            <Flex align={'center'} mb={3} position='relative'>
              <Box
                h='3rem '
                w='3rem'
                borderRadius={'full'}
                filter='auto'
                blur='20px'
                bgColor='blue'
                position={'absolute'}
              ></Box>
              <Text
                fontFamily={'heading'}
                fontSize={'xl'}
                color={'white'}
                fontWeight={'bold'}
                zIndex='docked'
              >
                MEMBER Level 1:
              </Text>
            </Flex>

            <Text fontSize={'md'} color={'gray.400'}>
              An individual who has 35,000 BANK in their wallet. L1s have access
              to perks and are eligible to be nominated to L2.
            </Text>
          </Box>

          <Box>
            <Flex align={'center'} mb={3} position='relative'>
              <Box
                h='3rem '
                w='3rem'
                borderRadius={'full'}
                filter='auto'
                blur='20px'
                bgColor='#3bc4b3'
                position={'absolute'}
              ></Box>
              <Text
                fontFamily={'heading'}
                fontSize={'xl'}
                color={'white'}
                fontWeight={'bold'}
                zIndex='docked'
              >
                CONTRIBUTOR Level 2:
              </Text>
            </Flex>

            <Text fontSize={'md'} color={'gray.400'}>
              An individual who has 35,000 BANK in their wallet and has been
              nominated by and voted in by the existing L2 contributors. L2s are
              trusted community members who embody the BanklessDAO mission.
            </Text>
          </Box>

          <Box>
            <Flex align={'center'} mb={3} position='relative'>
              <Box
                h='3rem '
                w='3rem'
                borderRadius={'full'}
                filter='auto'
                blur='20px'
                bgColor='#db24da'
                position={'absolute'}
              ></Box>
              <Text
                fontFamily={'heading'}
                fontSize={'xl'}
                color={'white'}
                fontWeight={'bold'}
                zIndex='docked'
              >
                WHALE Level 3:
              </Text>
            </Flex>

            <Text fontSize={'md'} color={'gray.400'}>
              An individual who has 150,000 BANK in their wallet.
            </Text>
          </Box>
        </SimpleGrid>
      </Stack>
    </>
  )
}
