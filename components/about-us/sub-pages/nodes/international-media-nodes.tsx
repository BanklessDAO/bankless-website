import { Box, Heading, Text, Stack, Flex } from '@chakra-ui/react'
import Underline from 'components/common/underline'
import { FiArrowUpRight } from 'react-icons/fi'
//TODO add URLS
const countries = [
  'Adria',
  'Africa',
  'Australia',
  'Brazil',
  'Bulgaria',
  'China',
  'Czech',
  'Farsi',
  'France',
  'Germany',
  'Greece',
  'Hindi',
  'Italy',
  'Spain',
  'Sweden',
  'Turkey',
  'Ukraine',
  'Vietnam',
]

export default function NodesInternationalMediaComponent() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        mt={'4rem'}
        spacing={{ base: 4, md: 6 }}
        py={{ base: 10, md: 18 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'110%'}
          color={'white.100'}>
          International Media Nodes
          <Underline />
        </Heading>
        <Text
          color={'grey'}
          fontSize={{ sm: 'sm', md: 'md' }}
          textTransform={'uppercase'}>
          Join the Bankless journey in your continent, country, or language!
        </Text>
        <Flex
          flex={1}
          justify={{ base: 'center', md: 'space-around' }}
          align={'center'}
          direction={{ md: 'row' }}
          wrap={'wrap'}>
          {countries.map((country, index) => {
            return (
              <Flex
                align={'center'}
                color={'white.100'}
                key={index}
                padding={{ base: '0.5rem', md: '1rem' }}>
                <Text
                  mr={'0.25rem'}
                  fontSize={{ base: '1xl', md: 'md' }}
                  fontWeight={'bold'}>
                  Bankless {country}
                </Text>
                <FiArrowUpRight size={25} />
              </Flex>
            )
          })}
        </Flex>
      </Stack>
    </>
  )
}
