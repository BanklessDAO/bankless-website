import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react'
import Underline from 'components/_common/underline'

type TextRowCenteredProps = {
  headline: string
  para: string
}

export default function TextRowCentered({
  headline,
  para,
}: TextRowCenteredProps) {
  const pxBase = 0
  const pxMd = 40
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        alignItems={'center'}
        spacing={{ base: 4, md: 7 }}
        mt={{ base: '2rem', md: '1rem', lg: '6rem' }}
        pb={{ base: '2rem', md: '4rem', lg: '6rem' }}>
        <Heading
          fontFamily='Clear Sans'
          fontWeight={{ base: 600, md: 800 }}
          fontSize={{ base: '3xl', md: '4xl' }}
          lineHeight={'110%'}
          color={'white.100'}
          textTransform={'uppercase'}
          pb={{ base: '2rem', md: 0 }}>
          {headline}
          <Underline />
        </Heading>

        <Text
          w={{ base: '100%', md: '75%', lg: '100%' }}
          fontFamily='Clear Sans'
          fontSize={{ base: 'xl', lg: '2xl' }}
          color={'grey'}
          textAlign={'center'}
          px={{ base: pxBase, lg: pxMd }}>
          {para}
        </Text>
      </Stack>
    </>
  )
}
