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
import { CarouselSlideProps, CarouselSlide } from './CarouselSlide'

type CarouselProps = {
  width: number
  title: string
  description: string
  slides: Array<CarouselSlideProps>
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
