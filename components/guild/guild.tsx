import React from 'react'
import Image from 'next/image'

import {
  Flex,
  Text,
  Container,
  VStack,
} from '@chakra-ui/react'
import Underline from 'components/common/underline'


function Guild() {
  return (
    <Flex width={'1199px'} flexDir='column' justify='center' alignItems='center' >
      <Text fontWeight={700} fontSize='6xl' textAlign='center' maxW={750}>
        Guilds
      </Text>
      <Underline />
      <Text textAlign='center' mb={10} fontSize={'2xl'} lineHeight={'46px'} height={183} maxW={826}>
        Guilds are the way we organize our contributors.
        These talent pools serve as a way for  individuals who share common interests, professional backgrounds,
        and skills to come together and incubate projects.
        There are 13 guilds within bDAO.
      </Text>
      <VStack spacing={100}>
        <Flex width={'1199px'} justify={'space-between'} align={'flex-start'}>
          <VStack w={'full'} h={'full'} alignItems={'flex-start'}>
            <Image
              src='/images/analytic-guild.png'
              alt='bankToken'
              height={400}
              width={520}
            />
          </VStack>
          <Container>
            <Flex alignItems={'flex-start'} flexDirection={'column'}>
              <Container>
                <Flex alignItems={'flex-start'} flexDirection={'column'}>
                  <Text pb={10} fontWeight={700} fontSize='3xl' textAlign='center' maxW={750}>
                    Analytics Guild
                  </Text>
                  <Text lineHeight={'46px'}>The Analytics Guild builds data products and uses data analytics to equip
                    bDAO members to achieve our mission with data-driven intelligence.
                    The Analytics Guild also incubated DAO DASH.
                  </Text>
                </Flex>
              </Container>
            </Flex >
          </Container>
        </Flex>
        <Flex height={'30%'} width={'1199px'} justify={'space-between'} align={'flex-start'}>
          <Container>
            <Flex alignItems={'flex-start'} flexDirection={'column'}>
              <Container>
                <Text pb={10} fontWeight={700} fontSize='3xl' maxW={750}>
                  Audiovisual Guild
                </Text>
                <Text lineHeight={'46px'}>The AV Guild is the home of BanklessDAO video and audio content.
                  From broadcasting the Community Call to building the next version of our audio-recording bot,
                  bDAO contributors rely on the AV Guild for crisp, clear audio solutions for unifying contributors across time zones.
                </Text>
              </Container>
            </Flex >
          </Container>
          <VStack w={'full'} h={'full'} alignItems={'flex-start'}>
            <Image
              src='/images/eye-analytics.png'
              alt='bankToken'
              height={400}
              width={520}
            />
          </VStack>
        </Flex>
        <Flex width={'1199px'} justify={'space-between'} align={'flex-start'}>
          <VStack w={'full'} h={'full'} alignItems={'flex-start'}>
            <Image
              src='/images/happy-faces.png'
              alt='bankToken'
              height={400}
              width={520}
            />
          </VStack>
          <Container>
            <Flex alignItems={'flex-start'} flexDirection={'column'}>
              <Container>
                <Flex alignItems={'flex-start'} flexDirection={'column'}>
                  <Text pb={10} fontWeight={700} fontSize='3xl' textAlign='center' maxW={750}>
                    DAOlationships Guild
                  </Text>
                  <Text lineHeight={'46px'}>
                    The DAOlationships Guild facilitates and coordinates relationships between external organizations and
                    the guilds within BanklessDAO.
                    This guild helps us best represent our DAO to anyone outside bDAO.
                  </Text>
                </Flex >
              </Container>
            </Flex >
          </Container>
        </Flex>
      </VStack >
    </Flex >
  )
}

export default Guild
