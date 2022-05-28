import React, { useEffect, useState } from 'react'
import { Box, Heading, Text, Stack, Image, IconButton } from '@chakra-ui/react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import Slider from 'react-slick'

export default function CarouselSection() {
  const [slider, setSlider] = useState<Slider | null>(null)
  const [settings, setSettings] = useState({
    dots: false,
    arrows: false,
    fade: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  })
  useEffect(() => {
    const changeSettings = () => {
      if (document.body.clientWidth < 768) {
        setSettings({
          dots: false,
          arrows: false,
          fade: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
        })
      } else {
        setSettings({
          dots: false,
          arrows: false,
          fade: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
        })
      }
    }
    window.addEventListener('resize', changeSettings)
    changeSettings()

    return () => {
      window.removeEventListener('resize', changeSettings)
    }
  }, [])

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
  const pxBase = 0
  const pxMd = 40

  return (
    <Stack mt='20' width='100%'>
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
        color={'white.100'}
        lineHeight={1.5}
        fontWeight={600}
        fontSize={{ base: '2xl', md: '3xl' }}>
        OUR VALUES
      </Heading>
      <Box width={'100%'}>
        <Slider {...settings} ref={(slider: unknown) => setSlider(slider)}>
          {cards.map((card, index) => {
            return (
              <Box
                alignItems={'center'}
                textAlign='center'
                justifyContent={'center'}
                justifyItems='center'
                key={index}
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
                <Image alt='card' src={card.image} width='94%' mx='3%' />
                <br />
                {popups[index] ? (
                  <Box
                    width={'94%'}
                    minHeight='200px'
                    mt={{ base: '-400px', md: '-160px' }}>
                    <Text
                      color={'white.100'}
                      fontSize={{ base: '50px', md: '20px' }}
                      textTransform={'uppercase'}
                      whiteSpace='pre'>
                      {card.title}
                    </Text>
                    <Text
                      color={'white.100'}
                      fontSize={{ base: '20px', md: '12px' }}
                      px='5'>
                      {card.text}
                    </Text>
                  </Box>
                ) : (
                  <Box
                    width={'94%'}
                    minHeight='200px'
                    mt={{ base: '-300px', md: '-100px' }}
                    transitionDuration={'1s'}>
                    <Text
                      color={'white.100'}
                      fontSize={{ base: '50px', md: '20px' }}
                      textTransform={'uppercase'}
                      whiteSpace='pre'>
                      {card.title}
                    </Text>
                  </Box>
                )}
              </Box>
            )
          })}
        </Slider>
        <IconButton
          aria-label='left-arrow'
          zIndex={2}
          background='transparent'
          borderRadius={'50%'}
          color='white'
          position='absolute'
          mt='-230px'
          ml={{ base: '100px', md: '0' }}
          _hover={{
            background: 'transparent',
            color: 'white.400',
          }}
          onClick={() => slider?.slickPrev()}>
          <BsArrowLeftCircle size='40px' />
        </IconButton>
        <IconButton
          aria-label='right-arrow'
          zIndex={2}
          background='transparent'
          borderRadius={'50%'}
          color='white'
          mt='-230px'
          float={'right'}
          mr={{ base: '100px', md: '0' }}
          _hover={{
            background: 'transparent',
            color: 'white.400',
          }}
          onClick={() => slider?.slickNext()}>
          <BsArrowRightCircle size='40px' />
        </IconButton>
      </Box>
    </Stack>
  )
}
