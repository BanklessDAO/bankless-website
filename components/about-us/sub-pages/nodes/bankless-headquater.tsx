import { Box, Heading, Text, Stack, Flex, Link } from '@chakra-ui/react'
import Underline from 'components/_common/underline'
import { FiArrowUpRight } from 'react-icons/fi'

export default function NodesBanklessHQComponent() {
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
          color={'white.100'}
          textTransform={'uppercase'}>
          BANKLESS HQ
          <Underline />
        </Heading>
        <Text
          color={'white.200'}
          fontSize={{ base: 'sm', sm: 'lg', md: '2xl' }}>
          Is the founding node of the Bankless media ecosystem. Led by David
          Hoffman and Ryan Sean Adams, this node runs the original Bankless
          podcast and the Bankless newsletter. It’s often referred to as
          “Bankless HQ” or “Bankless LLC.”
        </Text>
        <Flex
          flex={1}
          justify={{ base: 'center', md: 'space-around' }}
          align={'center'}
          direction={{ base: 'column', md: 'row' }}>
          <Flex align={'center'} color={'white.100'}>
            <Link href='https://www.bankless.com/read' isExternal>
              <Flex align={'center'} color={'white.100'}>
                <Text
                  mr={'0.25rem'}
                  fontSize={{ base: '1xl', md: '3xl' }}
                  fontWeight={'bold'}>
                  Substack
                </Text>
                <FiArrowUpRight size={25} />
              </Flex>
            </Link>
          </Flex>
          {/* TODO add url */}
          <Flex align={'center'} color={'white.100'}>
            <Link href='https://www.bankless.com/listen' isExternal>
              <Flex align={'center'} color={'white.100'}>
                <Text
                  mr={'0.25rem'}
                  fontSize={{ base: '1xl', md: '3xl' }}
                  fontWeight={'bold'}>
                  Podcast
                </Text>
                <FiArrowUpRight size={25} />
              </Flex>
            </Link>
          </Flex>
          {/* TODO add url */}
          <Flex align={'center'} color={'white.100'}>
            <Link href='https://www.youtube.com/c/Bankless' isExternal>
              <Flex align={'center'} color={'white.100'}>
                <Text
                  mr={'0.25rem'}
                  fontSize={{ base: '1xl', md: '3xl' }}
                  fontWeight={'bold'}>
                  Youtube
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
