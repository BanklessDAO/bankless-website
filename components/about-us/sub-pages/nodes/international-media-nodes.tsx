import { Box, Heading, Text, Stack, VStack, Flex } from '@chakra-ui/react'
import Underline from 'components/_common/underline'
import { FiArrowUpRight } from 'react-icons/fi'
import { ulid } from 'ulid'
import { BaseLink } from '../../../_common/BaseLink'

//TODO add URLS
const countries = [
  { name: 'Adria', url: 'https://linktr.ee/banklessadria' },
  { name: 'Arabic', url: 'https://linktr.ee/arbankless' },
  // { name: 'Africa', url: '/' }, // link not found on https://linktr.ee/international_media_nodes
  // { name: 'Australia', url: '/' }, // link not found on https://linktr.ee/international_media_nodes
  { name: 'Bengali', url: 'https://linktr.ee/banklessbe' },
  { name: 'Brazil', url: 'http://beacons.page/banklessbr' },
  { name: 'Bulgaria', url: 'https://linktr.ee/banklessBG' },
  { name: 'China', url: 'https://linktr.ee/BanklessCN' },
  { name: 'Czech', url: 'https://bankl.es/cz/' },
  { name: 'Deutsch', url: 'http://bankl.es/de' },
  { name: 'Dutch', url: 'https://linktr.ee/banklessdutch' },
  { name: 'Español', url: 'https://twitter.com/banklessdao_es' },
  { name: 'Farsi', url: 'https://linktr.ee/BanklessFarsi' },
  { name: 'France', url: 'https://linktr.ee/banklessfr' },
  { name: 'Greece', url: 'https://linktr.ee/banklessgr' },
  { name: 'Hindi', url: 'http://linktr.ee/banklesshi' },
  { name: 'Italia', url: 'https://linktr.ee/ITbanklessDAO' },
  { name: 'Magyar', url: 'https://linktr.ee/banklessmagyar' },
  { name: 'Malayalam', url: 'https://linktr.ee/banklessmalayalam' },
  { name: 'Mallu', url: 'https://linktr.ee/banklessmalayalam' },
  { name: 'Romania', url: 'https://linktr.ee/banklessRo' },
  { name: 'Sweden', url: 'https://linktr.ee/Bankless.se' },
  { name: 'Turkey', url: 'https://linktr.ee/banklesstr' },
  { name: 'Ukraine', url: 'https://linktr.ee/BanklessUA' },
  // { name: 'Vietnam', url: '/' } // link not found on https://linktr.ee/international_media_nodes,
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
          {countries.map(({ name, url }) => {
            return (
              <VStack key={ulid()} flex='0 0 33%' pb='1rem'>
                <BaseLink text={`Bankless ${name}`} href={url} typeSize='l' />
              </VStack>
            )
          })}
        </Flex>
      </Stack>
    </>
  )
}
