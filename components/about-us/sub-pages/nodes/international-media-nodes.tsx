import { Box, Heading, Text, Stack, VStack, Flex, Link } from '@chakra-ui/react'
import Underline from 'components/_common/underline'
import { FiArrowUpRight } from 'react-icons/fi'

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
          fontWeight={700}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'110%'}
          color={'white.100'}>
          International Media Nodes
          <Underline />
        </Heading>
        <Text
          color={'white.200'}
          fontSize={{ base: 'sm', sm: 'lg', md: '2xl' }}
        >
          Join the Bankless journey in your continent, country, or language!
        </Text>
        <Flex
          flex={1}
          justify={{ base: 'center', md: 'space-around' }}
          align={'center'}
          direction={{ base: 'column', md: 'row' }}>
          <Flex align={'center'} color={'white.100'}>
            <Link href='https://www.banklessimn.com/' isExternal>
              <Flex align={'center'} color={'white.100'}>
                <Text
                  mr={'0.25rem'}
                  fontSize={{ base: '1xl', md: '3xl' }}
                  fontWeight={'bold'}>
                  Website
                </Text>
                <FiArrowUpRight size={25} />
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Stack>
    </>
  )
}
