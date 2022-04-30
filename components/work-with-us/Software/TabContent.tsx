import { Text, Stack, Flex } from '@chakra-ui/react'
import { ConsultImage } from '../ConsultImage'
import { CTA } from '../CTA'

export default function SoftwareTabContentComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Text
          color={'gray.100'}
          fontSize={{ sm: 'sm', md: 'xl' }}
          textAlign='left'>
          Enter the next generation of DAO tooling with DEGEN. This powerhouse
          bot integrates with Discord to seamlessly perform administrative tasks
          such as distributing POAP links. Inquire about integrating DEGEN into
          your Discord server by filling out
        </Text>
        <CTA url='https://docs.bankless.community/degen/introduction/welcome' text='Bankless DEGEN'/>
      </Stack>

      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <ConsultImage
          alt={'Photo by JESHOOTS.COM on Unsplash'}
          src={'/images/work-with-us/work-with-us-3.jpg'}
        />
      </Flex>
    </Stack>
  )
}
