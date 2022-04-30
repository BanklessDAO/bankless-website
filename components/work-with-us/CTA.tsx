import React from 'react'
import {
  Stack,
  FormControl,
  Button,
  Input,
  useColorModeValue,
} from '@chakra-ui/react'
export const CTA = () => (
  <Stack direction={{ base: 'row', md: 'row' }} as={'form'} spacing={'12px'}>
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
)
