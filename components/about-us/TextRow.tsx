import {
  Box,
  Text,
  Stack,
  Image,
  Flex,
} from '@chakra-ui/react'

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
      mt={{ lg: '6rem' }}
      flexDirection={{ base: 'column', md: reversed ? 'row-reverse' : 'row' }}
      justifyContent='center'
      alignItems='center'
      pb={{ base: '2rem', md: '4rem', lg: 0 }}
      gap={{ base: 0, md: '2rem' }}>
      <Box
        flex='0 0 33%'
        h={{ base: '40vw', lg: '26vw' }}
        w='100%'
        pb={{ base: '2rem', md: 0 }}>
        <Image
          alt={imageAlt}
          fit={'cover'}
          align={'center'}
          w={'100%'}
          h={'100%'}
          src={imageSrc}
          borderRadius={'1rem'}
        />
      </Box>
      <Stack flex={1} pr={{ base: 0, lg: '1rem' }} m={0}>
        <Text
          color={'gray.100'}
          lineHeight={1.2}
          fontWeight={700}
          fontFamily='Clear Sans'
          fontSize={{ base: '3xl', lg: '4xl' }}
          pb='1rem'
          w={{ base: '100%', xl: '65%' }}>
          {title}
        </Text>
        <Text
          color='grey'
          fontSize={{ base: 'xl', lg: '2xl' }}
          fontFamily='Clear Sans'
          mt={0}
          p={0}
          textAlign={'left' }>
          {para}
        </Text>
      </Stack>
    </Flex>
  )
}
