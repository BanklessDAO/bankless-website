import {
  Box,
  Heading,
  Stack,
  Image,
  Flex,
  FormControl,
  Button,
} from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'

export default function NewMembersJoinComponent() {
  return (
    <>
      <Stack
        align={{ base: 'flex-start', md: 'center' }}
        spacing={{ base: 8, md: 10 }}
        mt={{ base: 5, md: 10 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box flex={1}>
          <Stack spacing={{ base: 3, md: 4 }}>
            <Heading
              color={'white.100'}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
            >
              Dive in and build the future of work with us.
            </Heading>
          </Stack>

          <FormControl
            w={{ base: '40%', md: '30%' }}
            marginInlineStart='unset!important'
            mt={'1.5rem'}
          >
            <Button
              colorScheme='red'
              w='100%'
              type='submit'
              borderRadius={'4px'}
              rightIcon={<FiArrowRight />}
              onClick={() => window.open('https://discord.com/invite/bankless')}
            >
              Join now
            </Button>
          </FormControl>
        </Box>

        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            overflow={'hidden'}
            w={'100%'}
            sx={{ height: { base: '250px', md: '200px' } }}
          >
            <Image
              alt={'Member Image'}
              fit={'scale-down'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={"/images/some3d.png"}
              // src={
              //   'https://s3-alpha-sig.figma.com/img/798a/d025/0b0595ee8a595ebc99046de92bfc7933?Expires=1649635200&Signature=e9Pm8CxFbWqhytZbPhaR6p0tSL6hd07tklxyD840af0NHAMavHy6FDucZD9JvXfOkA~zntWK-dN2BsABsiejfHKQc88I-DjaBovHyiTF6TuoVVd7pxR0Zg3xYUCFNESjdtd8SuhBzF~ya3nGg8VfwmcuyFGoFxI7EgnNN-RkjHOhVwUoZKZNFDsFC4as0fPQbLT6V2CWaUZSi5~4EwfudLSvvEgKWIlUGwt7CPUb5JS31oN0F6oIu5gjpRLq~iSIJLVo67zEiS3maSuVKHSFuvw1DxSfCIiL5e7bZp7plkXD5eRU349FWij9SQYWcjwsA93Rnek9Tov5B5ch1qyEsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              // }
            />
          </Box>
        </Flex>
      </Stack>
    </>
  )
}
