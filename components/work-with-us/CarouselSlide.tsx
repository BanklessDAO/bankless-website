import React from 'react'
import { Text, Stack, Flex } from '@chakra-ui/react'
import { ConsultImage } from './ConsultImage'
import { CTA } from './CTA'
import { ulid } from 'ulid'

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
      p={0}
      pt={{ base: 8, md: 14 }}
      direction={{ base: 'column-reverse', md: rowOrder }}>
      <Stack flex={1} spacing={{ base: 5, md: 6 }} alignContent='flex-start'>
        {paras.map(para => (
          <Text
            key={ulid()}
            color={'gray.100'}
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            textAlign='left'
            fontFamily='Clear Sans'
            lineHeight={1.5}
            width={{ base: '100%', lg: '80%' }}>
            {para}
          </Text>
        ))}
        <CTA url={cta.link} text={cta.text} />
      </Stack>

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
