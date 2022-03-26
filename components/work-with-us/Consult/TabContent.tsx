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

export default function ConsultTabContentComponent() {
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
              'https://s3-alpha-sig.figma.com/img/1b8e/c2e1/0b5980279143712e32d4c395d1dd8f4b?Expires=1649030400&Signature=VprOU20kNkOAzM~sM6CFdIck8LZvTWqZbhgLT8ZoSFFkNeZk6kNZ1eOJAg8vKf5IW~pdPvWIP6iTENiEjWjVXk-PAzu3l3WW1AAf1DKl44DtzoPKUWvTRHGu5mmeY3GzFjlO5~E41sSr3txCAWZjm1unrzCHgdhDMylT-lCd~NQKwtYNAB62Tvs6oV84jKTUCUxSBQkQJr7tkKXqHnMzMbqe0C7mySWVzc1f-m0S9plNqa~MxxUAZ7UN3JDPuNfVNk0TknVmfi87ZMUjKBc8ricvbgoSSZtYUxrX1kyXBgRYUVeDYUKC6vRgC1FFBZ6CBuE42cDCD1-0mEJ9C3NaWQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            }
          />
        </Box>
      </Flex>

      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          Our Web3-native consulting service draws on the expertise of bDAO
          members to help DAOs launch and scale their presence. Bankless
          Consultancy also helps traditional organizations take the first step
          into Web3.
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
