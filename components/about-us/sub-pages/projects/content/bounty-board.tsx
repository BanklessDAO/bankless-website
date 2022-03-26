import { Box, Text, Stack, Flex, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ProjectBountyBoardComponent() {
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
              'https://s3-alpha-sig.figma.com/img/f49e/804e/345b9c7b8dade5be756d09f32f26eaca?Expires=1649030400&Signature=Ls~R1W4~PwSPfcs2lRWOZ8g2NdPxez-FGYqPFBHnUvDko00qsT2e51CJbEnc83PuIqpB5-EYUjykp-kTeVmie~76Ho5csseRTAAfBOuN4DqqHe78zBJoj1I0KzpTFhNNljqtD1BUfJwMfPoQh7ltTJvvxGO6mQhpQVXmAbz-A7UahvWqShUxa0AWpBRBmD4k3OoWONjqpCW7WNZ5Vfnit~uJJJsfPVEIG7-Xkwy6eGjkv~9X2NnvrmXrfb5WqBk3Hsz6ckYKJCKg2iD-c7jBPlsnsPvAng6Bbuy~05rk463AkwbRJ4dDSSS8N~tKdyKBmPB7bOiDndX6WasAMwqzjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          BOUNTY BOARD
        </Heading>
        <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
          The Bounty Board creates an efficient mechanism of coordination
          between organizers and contributors. It provides a way to quickly
          access Web3 talent within the DAO for bountied work.
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
