import { Stack, Flex, Box, Heading, Text, Image, Link } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'
import TokenImg from '../../../../assets/banklesscoin.png'

export default function GovernanceStartComponent() {
  return (
    <>
      <Flex
        direction={'column'}
        mt='2rem'
        position={'relative'}
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
          py={{ base: 10, md: 16 }}
          direction={{ base: 'column', md: 'row' }}
          w='80%'
          zIndex='docked'
          justifyContent={'space-between'}
          mt={'5rem'}
        >
          <Box>
            <Stack flex={1} spacing={{ base: 5, md: 6 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                color={'white.100'}
                w={{ md: '25rem' }}
                fontSize={{ base: '3xl', lg: '5xl' }}
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
                fontSize={{ base: 'xl', md: 'xl' }}
                fontWeight={{ sm: '700', md: '400' }}
              >
                Join the{' '}
                <Text
                  fontSize={{ base: 'xl', md: 'xl' }}
                  fontWeight={{ sm: '700', md: '400' }}
                  color={'#D02128'}
                  display={'inline'}
                >
                  <Link
                    href={'https://forum.bankless.community/'}
                    isExternal
                    color='#D02128'
                  >
                    Discussion on Forums
                  </Link>
                </Text>
              </Text>
              <Link
                width={'fit-content'}
                href={'https://www.coinbase.com/how-to-buy/bankless-dao'}
                isExternal
                textDecoration={'none'}
                _hover={{
                  color: '#D02128',
                }}
              >
                <Flex
                  align={'center'}
                  _hover={{
                    color: '#D02128',
                    borderColor: '#D02128',
                    '.buy_bank_text': {
                      color: '#D02128',
                    },
                  }}
                  borderBottom={'2px solid white'}
                >
                  <Text
                    mr={'0.25rem'}
                    className={'buy_bank_text'}
                    fontSize={{ base: '2xl', lg: 'md' }}
                    fontWeight={'bold'}
                    cursor='pointer'
                    letterSpacing={'0px'}
                    pb='1px'
                  >
                    Buy Bank
                  </Text>
                  <FiArrowUpRight size={20} />
                </Flex>
              </Link>
            </Stack>
          </Box>
          <Box>
            <Box
              position={{ base: 'relative', sm: 'absolute', md: 'static' }}
              top={{ base: '2rem', sm: '16rem' }}
              left={{ base: '3rem', sm: '7rem' }}
              height={{ sm: '150px', md: '150px' }}
              rounded={'2xl'}
              width={'full'}
              overflow={'hidden'}
              display={'flex'}
              justifyContent={'center'}
            >
              <Image
                alt={'Hero Image'}
                src={TokenImg.src}
                minW='10rem'
                zIndex={'docked'}
              />
            </Box>
          </Box>
        </Flex>

        <Text
          mt={{ sm: '5rem', md: '2rem' }}
          textAlign={'center'}
          fontSize={{ base: '1.5rem', md: '3xl' }}
        >
          Join the{' '}
          <Text
            fontSize={{ base: '1.5rem', md: '3xl' }}
            color={'#D02128'}
            display={'inline'}
          >
            <Link
              href={'https://discord.com/invite/bankless'}
              isExternal
              color='#D02128'
            >
              Discord Server
            </Link>
          </Text>
        </Text>
      </Flex>
    </>
  )
}
