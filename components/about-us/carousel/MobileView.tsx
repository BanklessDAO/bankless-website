import React, { useEffect, useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  IconButton,
  HStack,
} from '@chakra-ui/react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import Slider from 'react-slick'
import { ulid } from 'ulid'
import styled from '@emotion/styled'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import cards from './cardContent.json'
import { mobileSliderSettings, tabletSliderSettings } from './sliderSettings'

const StyledSlider = styled(Slider)`
  height: 100%;
  & > .slick-list {
    height: 100%;
    & > .slick-track {
      height: 100%;
      & > .slick-slide {
        height: 100%;
        & > * {
          height: 100%;
          & > * {
            height: 100%;
          }
        }
      }
    }
  }
`

export default function MobileView() {
  const [slider, setSlider] = useState<Slider | null>(null)
  const [settings, setSettings] = useState(mobileSliderSettings)
  useEffect(() => {
    const changeSettings = () => {
      if (document.body.clientWidth >= 768) {
        setSettings(tabletSliderSettings)
      }
      return;
    }
    window.addEventListener('resize', changeSettings)
    changeSettings()

    return () => {
      window.removeEventListener('resize', changeSettings)
    }
  }, [])

  const [popups, setPopups] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  return (
    <Stack pb={{ base: '8rem', md: 0 }} width='100%'>
      <link
        rel='stylesheet'
        type='text/css'
        charSet='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      <Heading
        fontSize={{ base: '2xl', md: '3xl' }}
        color={'white.100'}
        fontWeight={600}
        lineHeight={1.5}
        fontFamily='Clear Sans'>
        OUR VALUES
      </Heading>
      <Box width={'100%'} pos='relative' h={{ base: '14rem', md: '16rem' }}>
        <StyledSlider
          {...settings}
          ref={(slider: unknown) => setSlider(slider)}>
          {cards.map((card, index) => {
            return (
              <Box
                as='section'
                key={ulid()}
                h='100%'
                textAlign='center'
                alignItems='center'
                justifyContent='center'
                onMouseEnter={() => {
                  const temp = popups
                  temp[index] = !popups[index]
                  setPopups([...temp])
                }}
                onMouseLeave={() => {
                  const temp = popups
                  temp[index] = !popups[index]
                  setPopups([...temp])
                }}>
                <Image
                  w={{ base: '100%', md: '94%' }}
                  h='100%'
                  src={card.image}
                  objectFit='cover'
                  mr={{ base: 0, md: '3%' }}
                  alt='card'
                />
                <br />
                <Box h='100%' pos='relative'>
                  {popups[index] ? (
                    <Box
                      w={{ base: '100%', md: '94%' }}
                      h='400px'
                      mt={{ base: '-380px', md: '-160px' }}
                      bgColor={{ base: 'blackAlpha.800', md: 'transparent' }}
                      transitionDuration={'1s'}
                      zIndex={2}
                      pos='absolute'
                      px='0.5rem'>
                      <Text
                        fontSize={'xl'}
                        fontFamily='Clear Sans'
                        color={'white.100'}
                        textTransform={'uppercase'}
                        whiteSpace='pre'>
                        {card.title}
                      </Text>
                      <Text
                        color={'white.100'}
                        fontFamily='Clear Sans'
                        fontSize='l'
                        pb='2rem'>
                        {card.text}
                      </Text>
                    </Box>
                  ) : (
                    <Box
                      w={{ base: '100%', md: '94%' }}
                      minHeight='200px'
                      mt={{ base: '-120px', md: '-100px' }}
                      pos='absolute'>
                      <Text
                        color={'white.100'}
                        fontFamily='Clear Sans'
                        fontSize='xl'
                        textTransform={'uppercase'}
                        whiteSpace='pre'>
                        {card.title}
                      </Text>
                    </Box>
                  )}
                </Box>
              </Box>
            )
          })}
        </StyledSlider>
        <HStack
          top='15rem'
          w='120%'
          pos='absolute'
          h='auto'
          ml='-10%'
          justifyContent='space-between'>
          <IconButton
            aria-label='left-arrow'
            h='auto'
            background='transparent'
            color='white'
            borderRadius={'50%'}
            _hover={{
              background: 'transparent',
              color: 'white.400',
            }}
            onClick={() => slider?.slickPrev()}>
            <BsArrowLeftCircle size='4rem' />
          </IconButton>
          <IconButton
            aria-label='right-arrow'
            h='auto'
            background='transparent'
            color='white'
            borderRadius={'50%'}
            _hover={{
              background: 'transparent',
              color: 'white.400',
            }}
            onClick={() => slider?.slickNext()}>
            <BsArrowRightCircle size='4rem' />
          </IconButton>
        </HStack>
      </Box>
    </Stack>
  )
}
