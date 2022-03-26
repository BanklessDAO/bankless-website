import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function DecentralizeLawNewsletterComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row-reverse' }}
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
              'https://s3-alpha-sig.figma.com/img/cfa6/0842/60b051a65673af8a0669fc3085bac763?Expires=1649030400&Signature=ckeFJ439nUjtOZPHNm8XU2lrwdV7Y0PVmISN0-QWd7UsQHrYbO2xQQb97owda-Ym4HQlfeh3LoBd2bBt4~Cf87DPqWvhXJHRJZYY7jwSR0pXRAdvhX9uA8MffR0UIjibiPku-t8dngsOudkEPqN4LfSezkA2iKI49H26H~QxxB3kZWq5YnJrnWxAw6ljHAWGizGGEBS38Py55bpbe7dTmrrwAk0TGxRhbx01x4GGE9dpHwwJj0FzvKIfSXoUeAapdxL9YoScC23FLoWCR~-CNucKTJVZELumUwnVcPBUpQVMP-LZCPhH1jxOxvlEXrm4vStj76fwHoD0zUvKgODwuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            }
          />
        </Box>
      </Flex>

      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          color={'gray.100'}
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '1xl', sm: '2xl', md: '4xl' }}
        >
          DECENTRALIZES-LAW-NEWSLETTER
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          The Legal Guild runs a legal newsletter that covers developments in
          the crypto-legal landscape. It is a premier newsletter in the crypto
          space, publishing cutting-edge legal analysis twice a month.
        </Text>
        <Stack
          direction={{ base: 'row', md: 'row' }}
          as={'form'}
          spacing={'12px'}
        >
          <Link href={'/#'} passHref={true}>
            <Flex align={'center'} color={'white.100'}>
              Learn More <FiArrowUpRight />
            </Flex>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}
