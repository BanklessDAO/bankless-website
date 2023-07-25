import React from 'react'
import {
  Flex,
  Text,
  Container,
  VStack,
} from '@chakra-ui/react'

function Deprecated() {
  return (
    <Container>
      <Flex flexDirection={{ base: 'column', md: 'row' }} py={10}>
        <VStack>
          <Container
            display={'flex'}
            flexDirection={'column'}
            ml={['auto', 0]}
            width={['80%', '100%']}
          >
            <Text
              variant={'span'}
              textAlign={{ base: 'center', md: 'left' }}
              fontWeight={700}
              fontSize='5xl'
            >
              DEPRECATED
            </Text>
          </Container>
        </VStack>
      </Flex>
    </Container>
  )
}

export default Deprecated
