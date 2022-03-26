import { Box, Heading, Text, Stack, Flex, Button } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function GovernanceSeasonComponent() {
  return (
    <>
      <Stack
        as={Box}
        spacing={{ base: 4, md: 6 }}
        mt={'4rem'}
        background={'#220001'}
        padding={'2.5rem'}
        borderRadius={'1rem'}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          lineHeight={'110%'}
          color={'white.100'}
        >
          SEASONS
        </Heading>
        <Text color={'grey'} fontSize={{ sm: 'sm', md: 'md' }}>
          A Season at bDAO is similar to a corporate quarter and generally lasts
          three months. They provide funding landmarks for bDAO coordinators and
          the Grants Committee. Each season has a fixed amount of BANK allocated
          to pay contributors in the DAO.
        </Text>

        <Text color={'white.100'} fontSize={{ sm: 'sm', md: 'md' }} mt={'2rem'}>
          Read our Seasonal Specifications on Mirror:
        </Text>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'center', md: 'space-between' }}
        >
          <Button
            minWidth={{ base: '8rem', md: '12rem' }}
            mt={'1rem'}
            fontSize={{ base: 'sm', md: 'md' }}
            bg={'#2B2B2B'}
            color={'white'}
            _hover={{
              bg: '#2B2B2B',
            }}
            _focus={{
              border: 'none',
            }}
          >
            Season 1
            <FiArrowUpRight size={20} />
          </Button>

          <Button
            minWidth={{ base: '8rem', md: '12rem' }}
            mt={'1rem'}
            fontSize={{ base: 'sm', md: 'md' }}
            bg={'#2B2B2B'}
            color={'white'}
            _hover={{
              bg: '#2B2B2B',
            }}
            _focus={{
              border: 'none',
            }}
          >
            Season 2
            <FiArrowUpRight size={20} />
          </Button>

          <Button
            minWidth={{ base: '8rem', md: '12rem' }}
            mt={'1rem'}
            fontSize={{ base: 'sm', md: 'md' }}
            bg={'#2B2B2B'}
            color={'white'}
            _hover={{
              bg: '#2B2B2B',
            }}
            _focus={{
              border: 'none',
            }}
          >
            Season 3
            <FiArrowUpRight size={20} />
          </Button>
        </Flex>
      </Stack>
    </>
  )
}
