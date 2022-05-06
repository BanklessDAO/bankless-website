import {
  Flex,
  // Grid,
  // GridItem,
  // VStack,
  // Heading,
  // Stack,
  // Input,
  // FormControl,
  // Button,
  // useColorModeValue,
} from '@chakra-ui/react'

import SubscribeWidget from 'components/common/subscribe-widget'

export default function CommunityCallsSubscribeComponent() {
  return (
    <Flex flexDir='column' justifyContent='center' alignItems='center' margin={8}>
      <SubscribeWidget />
      {/* <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        py={{ base: 10, md: 20 }}
        gap={4}
      >
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <VStack alignItems='center'>
            <Heading
              fontWeight={600}
              fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}
              lineHeight={'110%'}
              color={'white.100'}
              textAlign={'center'}
            >
              Start your journey
            </Heading>
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 2 }}>
          <Stack direction={{ base: 'row', md: 'row' }} as={'form'}>
            <FormControl>
              <Input
                variant={'solid'}
                borderWidth={1}
                color={'gray.800'}
                _placeholder={{
                  color: 'gray.400',
                }}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                id={'email'}
                type={'text'}
                required
                placeholder={'Your email address'}
                aria-label={'email form'}
                borderRadius={'none'}
              />
            </FormControl>
            <FormControl
              w={{ base: '30%', md: '40%' }}
              marginInlineStart='unset!important'
            >
              <Button
                colorScheme='red'
                w='100%'
                type='submit'
                borderRadius={'none'}
              >
                Subscribe
              </Button>
            </FormControl>
          </Stack>
        </GridItem>
      </Grid> */}
    </Flex>
  )
}
