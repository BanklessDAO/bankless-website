import {
  Box,
  Text,
  Stack,
  Flex,
  FormControl,
  Button,
  Input,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SoftwareTabContentComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          Enter the next generation of DAO tooling with DEGEN. This powerhouse
          bot integrates with Discord to seamlessly perform administrative tasks
          such as distributing POAP links. Inquire about integrating DEGEN into
          your Discord server by filling out
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
          bg={'#191919'}
        ></Box>
      </Flex>
    </Stack>
  )
}
