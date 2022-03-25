import {
  Box,
  Text,
  Stack,
  Flex,
  Image,
  FormControl,
  Button,
  Input,
  useColorModeValue,
} from '@chakra-ui/react'

export default function ServiceTabContentComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}
      >
        <Box
          position={'relative'}
          height={'300px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          width={'full'}
          overflow={'hidden'}
        >
          <Image
            alt={'Hero Image'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={
              'https://s3-alpha-sig.figma.com/img/5b13/5da2/bd02a8c43adfbf4f1bb35a43be965008?Expires=1649030400&Signature=O7X2bCx2Y2aHZAxgWvVVlaeWjkZeCORTWIAa2QFuR2oQAyr6exKvvyI9utNWxnMsUUoZY6iHETYaJILNEKVVFsM9J-Z3dsRmJBj4xUvwC3SkiR2quG8ryyhJDUrmGqVrxsi4IGCsAA1qXboc2UpkmqoHPgz9KhR7i-PNX20blN9TGSXWovHoIU9ZFl5jDGtuyaohdUv5iNvp-Yp8843n0sg4AFkK9cbcxKtuy-PPyaCAcaRu18jpadBIDZLoRod-oiirh-7XgZGZ-D1J~D9EKwx7S9j-XcOufrC4q6aeKvHs0KzTe92nJY6kNGUEjKvyQ1ZiILQ0FGW2gnv70Z220g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            }
          />
        </Box>
      </Flex>

      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          Our AV Guild provides top-notch audio and visual services for
          Web3-native organizations. From audio production to voice-over talent
          to custom photography, bDAO’s AV experts offer a service to level-up
          your organization’s audio and visual assets. Commission an AV expert
          by filling out this form.
        </Text>
        <Stack
          direction={{ base: 'row', md: 'row' }}
          as={'form'}
          spacing={'12px'}
        >
          <FormControl>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              id={'contact'}
              type={'text'}
              required
              placeholder={'Get in touch by filling out this contact form'}
              aria-label={'contact form'}
            />
          </FormControl>
          <FormControl w={{ base: '30%', md: '40%' }}>
            <Button colorScheme='red' w='100%' type='submit'>
              Fill the Form
            </Button>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  )
}
