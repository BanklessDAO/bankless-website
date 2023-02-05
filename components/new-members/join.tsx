import {
  Box,
  Heading,
  Stack,
  Image,
  Flex,
  FormControl,
  Button,
  Link,
} from '@chakra-ui/react'
import { CTAButton } from 'components/_common/CTAButton'

export default function NewMembersJoinComponent() {
  return (
    <Stack
      w='70%'
      align={{ base: 'flex-start', md: 'center' }}
      spacing={{ base: 8, md: 10 }}
      mt={{ base: 5, md: 10 }}
      mb={'4rem'}
      mx='auto'
      direction={{ base: 'column', md: 'row' }}>
      <Box flex={1}>
        <Stack spacing={{ base: '2rem'}}>
          <Heading
            color={'white.100'}
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}>
            Dive in and build the future of work with us.
          </Heading>
          <CTAButton
            text='Join now'
            url='https://discord.com/invite/bankless'
          />
        </Stack>
      </Box>

      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <Box
          position={'relative'}
          overflow={'hidden'}
          w={'100%'}
          sx={{ height: { base: '250px', md: '200px' } }}>
          <Image
            alt={'Member Image'}
            fit={'scale-down'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={'/images/some3d.png'}
          />
        </Box>
      </Flex>
    </Stack>
  )
}
