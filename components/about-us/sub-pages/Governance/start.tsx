import { Stack, Flex, Box, Heading, Text, Image } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'
import TokenImg from '../../../../assets/banklesscoin.png'

export default function GovernanceStartComponent() {
  return (
    <>
      <Flex
        direction={'column'}
        mt='2rem'
        position={'relative'}
        // bgColor='gray'
        alignItems='center'
      >
        <Box
          bgGradient='linear(to-b, rgba(245, 7, 7, 0.781) 3%, rgba(0, 0, 0, 0) 33%)'
          filter='auto'
          blur='5px'
          borderRadius={'50% 50% 0 0'}
          h='18rem'
          w='100%'
          minW='600px'
          position={'absolute'}
          top='2rem'
          opacity={'0.5'}
        ></Box>

        <Flex
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 16 }}
          direction={{ base: 'column', md: 'row' }}
          w='80%'
          zIndex='docked'
          justifyContent={'space-between'}
          mt={'5rem'}
        >
          <Box>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                color={'white.100'}
                w={{ md: '25rem' }}
                fontSize={{ base: '5xl', lg: '5xl' }}
              >
                Get Started in
                <br />
                <Text
                  as={'span'}
                  color={'white.100'}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                >
                  Governance Today
                </Text>
              </Heading>
              <Text
                color={'white.100'}
                fontSize={{ base: '2xl', md: 'xl' }}
                fontWeight='bold'
              >
                Join the
                <Text
                  fontSize={{ sm: 'md', md: 'xl' }}
                  color={'red'}
                  display={'inline'}
                >
                  &nbsp;Discussion on Forums
                </Text>
              </Text>
              <Flex align={'center'} color={'white.100'}>
                <Text
                  mr={'0.25rem'}
                  fontSize={{ base: '3xl', md: '4xl' }}
                  fontWeight={'bold'}
                  as='u'
                >
                  Buy Bank
                </Text>
                <FiArrowUpRight size={20} />
              </Flex>
            </Stack>
          </Box>
          <Box>
            <Box
              position={{ base: 'relative', sm: 'absolute', md: 'relative' }}
              top={{ base: '2rem', sm: '17rem', md: '0' }}
              left={{ base: '0rem', sm: '7rem', md: '0' }}
              height={{ sm: '150px', md: '250px' }}
              rounded={'2xl'}
              width={'full'}
              overflow={'hidden'}
              display={'flex'}
              justifyContent={'center'}
            >
              <Image
                alt={'Hero Image'}
                src={TokenImg.src}
                minW='15rem'
                zIndex={'docked'}
              />
            </Box>
          </Box>
        </Flex>

        <Text
          mt='2rem'
          textAlign={'center'}
          fontSize={{ base: '1.5rem', md: '3xl' }}
        >
          Join the
          <Text
            fontSize={{ base: '1.5rem', md: '3xl' }}
            color={'red'}
            display={'inline'}
          >
            &nbsp;Discord Server
          </Text>
        </Text>
      </Flex>
    </>
  )
}
