import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Center,
  Button,
} from '@chakra-ui/react'

const requirements = [
  {
    funding: 'Less than 50,000 BANK',
    voters: 25,
  },
  {
    funding: '50,001 - 250,000 BANK',
    voters: 31,
  },
  {
    funding: '250,001 - 500,000 BANK',
    voters: 40,
  },
  {
    funding: '500,001 - 1,000,000 BANK',
    voters: 51,
  },
  {
    funding: 'Greater than 1,000,001 BANK',
    voters: 63,
  },
  {
    funding: 'Governance proposals',
    voters: 63,
  },
  {
    funding: 'Emergency proposals',
    voters: 91,
  },
]

export default function GovernanceRequirementComponent() {
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
          textTransform={'uppercase'}
        >
          QUORUM REQUIREMENTS
        </Heading>

        <Text fontSize={'md'} color={'gray.400'}>
          Depending on the financial ask, quorum requirements for forum posts
          are scaled. The table below shows how many voters will need to be
          present to approve your request.
        </Text>

        <Center>
          <Flex
            direction='column'
            background={'#191919'}
            minWidth={{ base: '100%', md: '32rem' }}
            padding={'1rem'}
          >
            <Stack direction={'row'} spacing={4}>
              <Button
                flex={1}
                fontSize={{ base: '0.6rem', sm: 'sm' }}
                bg={'#0D0D0D'}
                color={'white'}
                _hover={{
                  bg: '#0D0D0D',
                }}
                _focus={{
                  border: 'none',
                }}
              >
                Funding Requested
              </Button>
              <Button
                flex={1}
                fontSize={{ base: '0.6rem', sm: 'sm' }}
                bg={'#0D0D0D'}
                color={'white'}
                _hover={{
                  bg: '#0D0D0D',
                }}
                _focus={{
                  border: 'none',
                }}
              >
                Number of voters required
              </Button>
            </Stack>

            {requirements.map((requirement, index) => {
              return (
                <Stack mt={4} direction={'row'} spacing={4} key={index}>
                  <Button
                    flex={1}
                    fontSize={{ base: '0.6rem', sm: 'sm' }}
                    bg={'#2B2B2B'}
                    color={'white'}
                    _hover={{
                      bg: '#2B2B2B',
                    }}
                    _focus={{
                      border: 'none',
                    }}
                  >
                    {requirement.funding}
                  </Button>
                  <Button
                    flex={1}
                    fontSize={{ base: '0.6rem', sm: 'sm' }}
                    bg={'#2B2B2B'}
                    color={'white'}
                    _hover={{
                      bg: '#2B2B2B',
                    }}
                    _focus={{
                      border: 'none',
                    }}
                  >
                    {requirement.voters} voters
                  </Button>
                </Stack>
              )
            })}
          </Flex>
        </Center>
      </Stack>
    </>
  )
}
