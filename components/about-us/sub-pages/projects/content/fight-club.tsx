import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function FightClubComponent() {
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
              'https://s3-alpha-sig.figma.com/img/8096/88bf/05f9a94fff2075386de69544a30cad10?Expires=1649030400&Signature=eE6SMO5pL3VRz~9tNteR86t5kXI39gMJHC8AbNghMS2sGlNqDxR-R0SAvvStMkRVSGPjc4c50YsGQw0YjIAbZ4wF8SOjZmvdG~YryaujZHKTIOI-0~ibAskUC302xeSowxxlZN2hk7YqpzE1FhGS41y5~lf37gv7-9VU7VYoEiSjMAC-fE87QkIUiLANMQaVQHiB7Eip3cQ-47pWN0gdh543shtGfT8fZiRM6uIVBc10LrI9sBkGirHinV3CTF4u6XVO1988DHENgs8YKdg8dCEGkGtKZMWQkYdeEpTdTEFbJWZs2b9uea8hcjMG315iCqviTyhqPU1rKRMcYhe7AQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          FIGHT CLUB
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          Fight Club aims to create opportunities for the bDAO community to pool
          capital, invest in projects, and share proceeds while offering venture
          investing education.
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
