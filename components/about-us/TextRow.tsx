import {
  Box,
  Heading,
  Text,
  Stack,
  HStack,
  Image,
  Flex,
  VStack,
  keyframes,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

type TextRow = {
  imageSrc: string
  imageAlt: string
  title: string
  para: string
  reversed?: boolean
}

export const TextRow = ({
  para,
  title,
  imageSrc,
  imageAlt,
  reversed = false,
}: TextRow) => {
  return (
    <Flex
      mt='10rem'
      flexDirection={{ base: 'column', lg: reversed ? 'row-reverse' : 'row' }}
      justifyContent='center'
      alignItems='center'
      pb='2rem'>
      <Box
        flex='0 0 40%'
        pos={'relative'}
        h={{ base: '40vw', lg: '20vw' }}
        w='100%'
        pb={{ base: '2rem', lg: 0 }}
        pr={{ base: 0, lg: !reversed ? '2rem' : 0 }}>
        <Image
          alt={imageAlt}
          fit={'cover'}
          align={'center'}
          w={'100%'}
          h={'100%'}
          src={imageSrc}
        />
      </Box>
      <Stack flex={1} pr={{ base: 0, lg: '1rem' }}>
        <Text
          color={'gray.100'}
          lineHeight={1.2}
          fontWeight={700}
          fontFamily='Clear Sans'
          fontSize='4xl'
          pb='1rem'
          w={{ base: '60%', lg: '' }}>
          {title}
        </Text>
        <Text
          color='grey'
          fontSize='2xl'
          fontFamily='Clear Sans'
          lineHeight={1.2}>
          {para}
        </Text>
      </Stack>
    </Flex>
  )
}
