import { Text, Stack, Flex } from '@chakra-ui/react'
import { ConsultImage } from '../ConsultImage'
import { CTA } from '../CTA'

export default function ConsultTabContentComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <ConsultImage
          src={'/images/work-with-us/work-with-us-2.jpg'}
          alt={'Hero Image'}
        />
      </Flex>

      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Text
          color={'gray.100'}
          fontSize={{ sm: 'sm', md: 'xl' }}
          textAlign='left'>
          Our Web3-native consulting service draws on the expertise of bDAO
          members to help DAOs launch and scale their presence.
        </Text>
        <Text
          color={'gray.100'}
          fontSize={{ sm: 'sm', md: 'xl' }}
          textAlign='left'>
          Bankless Consultancy also helps traditional organizations take the
          first step into Web3.
        </Text>
        <CTA />
      </Stack>
    </Stack>
  )
}
