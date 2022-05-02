import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import { ConsultImage } from './ConsultImage'
import { CTA } from './CTA'

type CarouselProps = {
  width: number
  title: string
  description: string
  slides: Array<CarouselSlideProps>
}

type CarouselSlideProps = {
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

function CarouselSlide({ paras, cta, image }: CarouselSlideProps) {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        {paras.map(para => (
          <Text
            color={'gray.100'}
            fontSize={{ sm: 'sm', md: 'xl' }}
            textAlign='left'>
            {para}
          </Text>
        ))}
        <CTA
          url={cta.link}
          text={cta.text}
        />
      </Stack>

      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <ConsultImage
          alt={image.alt}
          src={image.src}
        />
      </Flex>
    </Stack>
  )
}

export default function Carousel({
  width,
  title,
  description,
  slides,
}: CarouselProps) {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 3, md: 5 }}
        py={{ base: 10, md: 18 }}
        mt={{ base: 10, md: 16 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          lineHeight={'110%'}
          color={'white.100'}>
          {title}
        </Heading>
        <Text color={'white.200'} fontSize={{ sm: 'sm', md: 'md' }}>
          {description}
        </Text>
      </Stack>

      <Tabs
        align='center'
        variant='unstyled'
        colorScheme='green'
        py={{ base: 10, md: 14 }}
        orientation={width < 576 ? 'vertical' : 'horizontal'}
        flexDirection='column'>
        <TabList>
          {slides.map(({ title }: CarouselSlideProps) => (
            <Tab
              color={'white.100'}
              _selected={{ borderBottom: '2px solid red' }}
              _focus={{ boxShadow: 'none' }}
              fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}>
              {title}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {slides.map(slide => (
            <TabPanel>
              <CarouselSlide {...slide} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  )
}
