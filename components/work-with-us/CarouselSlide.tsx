import React from 'react'
import { Text, Stack, VStack, Flex } from '@chakra-ui/react'
import { ConsultImage } from './ConsultImage'
import { CTA } from './CTA'

export type CarouselSlideProps = {
  title: string
  paras: Array<string>
  cta: {
    text: string
    link: string
  }
  image: {
    src: string
    alt: string
  }
  carouselIndex: number
}

export function CarouselSlide({
  paras,
  cta,
  image,
  carouselIndex,
}: CarouselSlideProps) {
  const rowOrder = carouselIndex % 2 ? 'row' : 'row-reverse'
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: rowOrder }}>
      <VStack flex={1} spacing={{ base: 5, md: 10 }}>
        {paras.map(para => (
          <Text
            color={'gray.100'}
            fontSize={{ sm: 'sm', md: 'xl' }}
            textAlign='left'>
            {para}
          </Text>
        ))}
        <CTA url={cta.link} text={cta.text} />
      </VStack>

      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <ConsultImage alt={image.alt} src={image.src} />
      </Flex>
    </Stack>
  )
}
