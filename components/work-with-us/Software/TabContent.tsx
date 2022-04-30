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
        <CTA />
      </Stack>

      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <ConsultImage
          alt={'Hero Image'}
          src={
            'https://s3-alpha-sig.figma.com/img/5b13/5da2/bd02a8c43adfbf4f1bb35a43be965008?Expires=1649030400&Signature=O7X2bCx2Y2aHZAxgWvVVlaeWjkZeCORTWIAa2QFuR2oQAyr6exKvvyI9utNWxnMsUUoZY6iHETYaJILNEKVVFsM9J-Z3dsRmJBj4xUvwC3SkiR2quG8ryyhJDUrmGqVrxsi4IGCsAA1qXboc2UpkmqoHPgz9KhR7i-PNX20blN9TGSXWovHoIU9ZFl5jDGtuyaohdUv5iNvp-Yp8843n0sg4AFkK9cbcxKtuy-PPyaCAcaRu18jpadBIDZLoRod-oiirh-7XgZGZ-D1J~D9EKwx7S9j-XcOufrC4q6aeKvHs0KzTe92nJY6kNGUEjKvyQ1ZiILQ0FGW2gnv70Z220g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          }
        />
      </Flex>
    </Stack>
  )
}
