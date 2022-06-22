import React, { useEffect, useState } from 'react'
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Stack,
  Image,
  IconButton,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import Slider from 'react-slick'
import { ulid } from 'ulid'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slideIn = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`

const StyledSlider = styled(Slider)`
  height: 100%;
  & > .slick-list {
    height: 100%;
    & > .slick-track {
      height: 100%;
      & > .slick-slide {
        height: 100%;
        padding-right: 1rem;
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

export default function DesktopView() {
  const [slider, setSlider] = useState<Slider | null>(null)
  const [settings, setSettings] = useState({
    dots: false,
    arrows: false,
    fade: false,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  const cards = [
    {
      title: '\nEDUCATION',
      text: 'We learn from each other. We seek to become a trusted guide that empowers people all over the globe to adopt decentralized finance by sharing accurate, truthful, and objective information.',
      image: '/images/about-us/our-values-education.png',
    },
    {
      title: '\nCULTURE',
      text: 'We reward action and embrace risk. We empower our community to continually drive new initiatives by providing a space to self-organize and quickly move from idea to action.',
      image: '/images/about-us/our-values-culture.png',
    },
    {
      title: 'DECENTRALIZED \n GOVERNANCE',
      text: 'We put decision making into the hands of the collective. We create legitimacy through an environment where the best ideas win.',
      image: '/images/about-us/our-values-decentralized-governance.png',
    },
    {
      title: '\nEDUCATION',
      text: 'We learn from each other. We seek to become a trusted guide that empowers people all over the globe to adopt decentralized finance by sharing accurate, truthful, and objective information.',
      image: '/images/about-us/our-values-education.png',
    },
    {
      title: '\nCULTURE',
      text: 'We reward action and embrace risk. We empower our community to continually drive new initiatives by providing a space to self-organize and quickly move from idea to action.',
      image: '/images/about-us/our-values-culture.png',
    },
    {
      title: 'DECENTRALIZED \n GOVERNANCE',
      text: 'We put decision making into the hands of the collective. We create legitimacy through an environment where the best ideas win.',
      image: '/images/about-us/our-values-decentralized-governance.png',
    },
  ]

  const [popups, setPopups] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  return (
    <Stack pb={{ base: '5rem' }} width='100%'>
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
      <Box width={'100%'} pos='relative' h='12rem'>
        <StyledSlider
          {...settings}
          ref={(slider: unknown) => setSlider(slider)}>
          {cards.map((card, index) => {
            return (
              <Box
                as='article'
                key={ulid()}
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
                <Grid
                  gridTemplateColumns='1fr'
                  gridTemplateRows='1fr'
                  templateAreas={`"center"`}
                  w='100%'
                  h='100%'>
                  <GridItem gridArea='center'>
                    <Image
                      w={{ base: '100%' }}
                      h='100%'
                      src={card.image}
                      objectFit='cover'
                      alt='card'
                    />
                  </GridItem>
                  <GridItem gridArea='center'>
                    <Box h='100%' gridArea='center'>
                      {popups[index] ? (
                        <VStack
                          as='section'
                          w='100%'
                          h='100%'
                          bgColor='blackAlpha.800'
                          zIndex={2}
                          py='0.25rem'
                          px='0.5rem'
                          animation={`${slideIn} 500ms ease-in forwards`}>
                          <Text
                            fontSize={'xl'}
                            fontFamily='Clear Sans'
                            color={'white.100'}
                            textTransform={'uppercase'}
                            mt={0}
                            flex='0 0 auto'>
                            {card.title}
                          </Text>
                          <Text
                            color={'white.100'}
                            fontFamily='Clear Sans'
                            fontSize={{ base: '0.9rem', lg: '1rem' }}
                            pb='2rem'>
                            {card.text}
                          </Text>
                        </VStack>
                      ) : (
                        <VStack
                          as='section'
                          w='100%'
                          h='100%'
                          justifyContent='flex-end'
                          pb='1rem'>
                          <Text
                            color={'white.100'}
                            fontFamily='Clear Sans'
                            fontSize='xl'
                            textTransform={'uppercase'}
                            whiteSpace='pre'>
                            {card.title}
                          </Text>
                        </VStack>
                      )}
                    </Box>
                  </GridItem>
                </Grid>
              </Box>
            )
          })}
        </StyledSlider>
        <IconButton
          top={{ base: '80%', lg: '30%' }}
          left={{ base: '-3%', lg: '-6' }}
          pos='absolute'
          aria-label='left-arrow'
          background='transparent'
          borderRadius={'50%'}
          color='white'
          h='auto'
          _hover={{
            background: 'transparent',
            color: 'white.400',
          }}
          onClick={() => slider?.slickPrev()}>
          <BsArrowLeftCircle size='4rem' />
        </IconButton>
        <IconButton
          top={{ base: '80%', lg: '30%' }}
          right={{ base: '-3%', lg: '-5' }}
          pos='absolute'
          aria-label='right-arrow'
          background='transparent'
          borderRadius={'50%'}
          color='white'
          h='auto'
          _hover={{
            background: 'transparent',
            color: 'white.400',
          }}
          onClick={() => slider?.slickNext()}>
          <BsArrowRightCircle size='4rem' />
        </IconButton>
      </Box>
    </Stack>
  )
}
