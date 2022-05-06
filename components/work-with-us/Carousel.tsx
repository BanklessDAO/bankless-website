import {
  Box,
  Heading,
  Text,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import {  CarouselSlide } from './CarouselSlide'
import { ulid } from 'ulid'

type CarouselProps = {
  width: number
  title: string
  description: string
  slides: Array<CarouselSlide>
  carouselIndex: number
}

type CarouselSlide = {
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
}

export default function Carousel({
  width,
  title,
  description,
  slides,
  carouselIndex,
}: CarouselProps) {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 3, md: 5 }}
        py={{ sm: 10, md: 18 }}
        mt={{ base: 10, sm: 10, md: 16 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          lineHeight={'110%'}
          color={'white.100'}
          fontFamily='Clear Sans'>
          {title}
        </Heading>
        <Text
          color={'white.200'}
          fontSize={{ sm: 'sm', md: 'md' }}
          fontFamily='Clear Sans'>
          {description}
        </Text>
      </Stack>

      <Tabs
        align='center'
        variant='unstyled'
        colorScheme='green'
        py={{ base: 8, sm: 10, md: 14 }}
        orientation={width < 576 ? 'vertical' : 'horizontal'}
        flexDirection='column'>
        <TabList>
          {slides.map(({ title }: CarouselSlide) => (
            <Tab
              key={ulid()}
              color={'white.100'}
              fontSize={{ base: '2xl', sm: 'sm', md: 'md' }}
              fontFamily='Clear Sans'
              textTransform='uppercase'
              p={{ base: 2, sm: 4 }}
              _selected={{ borderBottom: '2px solid red' }}
              _focus={{ boxShadow: 'none' }}>
              {title}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {slides.map(slide => (
            <TabPanel p={0} key={ulid()}>
              <CarouselSlide {...slide} carouselIndex={carouselIndex} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  )
}
