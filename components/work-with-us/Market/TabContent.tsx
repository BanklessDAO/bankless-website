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
import { ChakraNextImage } from 'components/common/ChakraNextImage'
import { ConsultImage } from '../ConsultImage'

export default function MarketTabContentComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'xl' }} textAlign="left">
          Sponsor any of our newsletters and reach tens of thousands of readers
          every week. Choose from Weekly Rollup, State of the DAOs,
          Decentralized Art, Decentralized Law, and Gearing up, as well as a
          variety of languages, to reach your perfect audience. Inquire about
          sponsoring a newsletter by filling out this form.
        </Text>
        <Stack
          direction={{ base: 'row', md: 'row' }}
          as={'form'}
          spacing={'12px'}>
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
        w={'full'}>
        <ConsultImage
          alt={'Hero Image'}
          src={
            'https://s3-alpha-sig.figma.com/img/7d79/9fd3/9acaaa1c332c27aafb28b7b67c29b95d?Expires=1649030400&Signature=JVP0rKoQyQJN2CSb9YpWhRpqI-Pljbp2aiTIGkw85cbnSumkGmgx0rE90MLwqIqSDsc6n-~Vtpm4LYLtNX115jLY1ju1lJ82QIxRC6JB-Pm0HBysjXk3JIZWS0IwoLGGm1zWqzSiVR~~VBRHDwA4Nie8pUhqXP6UA2SKeHrtGJGESBdLVrIXgo3OEriVNuIkf--hQgzn0iKlJP2m0lUwoeDWx2-99q59di8Lh6OkAXZaU6W9SJrlg4GgbLLhwTnXuzPuTfhusysUyvz83BwrpK7RmdR0TF1tKVC870483Ib9U0x5Sr6fYnNF64gLwBy~rRnbHvN5j~pS2WuVB09BRg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          }
        />
      </Flex>
    </Stack>
  )
}
