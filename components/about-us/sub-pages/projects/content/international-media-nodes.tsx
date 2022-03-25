import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function InternationalMediaNodesComponent() {
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
              'https://s3-alpha-sig.figma.com/img/ed24/71a4/71a2d20c2e8864eb960d3f16262f367f?Expires=1649030400&Signature=QRS2geXf2l1YfpQNkV89y7AgriyzqkFPwctn18b0-9IyR~YNnkZA7oRTshr3n5SyoaO-08~3EaI~AnU3Ed0J7xv7Lo2k9tlp9ZYRr0jwCLGL9POVVnWjMO1Fm-K6bjGZimpM6pJEsGd4jnhoCD~fRolzUMi3RjMEN5Zi2oJCaI-DonWSjKE9H1zKaanvrbI1KpWr~0mQC~7K6leWSKFBqeEekc-Zzw3cEPfNg6bNxEuNCIUzAQJ1YPf0STZkhCK1ZuP8wiyPyUDG-VUDgErgjCRxBKR7RxCblhDVqdVi9EQPjVld6EmnSyaPcmg7TKOEb1c~ini4JC2P0uidFXOt1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          INTERNATIONAL MEDIA NODES
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          International Media Nodes (IMN) are Bankless channels that spread the
          message of the Bankless movement to regions beyond North America. They
          translate BanklessDAO content, publish original pieces, run Twitter
          pages, and ship newsletters to cover many of the regions and languages
          of the world.
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
