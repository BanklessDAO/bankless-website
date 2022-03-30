import React from 'react'
import {
  Box,
  Heading,
  Text,
  Stack,
  IconButton,
  Flex,
  Progress,
} from '@chakra-ui/react'
import Slider from 'react-slick'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Underline from 'components/common/underline'
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: false,
  slidesToShow: 1,
  speed: 500,
}

export default function NewMemberJoinMethodComponent() {
  const [slider, setSlider] = React.useState<Slider | null>(null)

  const cards = [
    {
      title: 'JOIN THE SERVER',
      text: 'Join the bDAO Discord server here. Following a brief verification and onboarding process, you can get a free guest pass from a Level 2 contributor, which will allow you to explore the server. Your guest pass expires in 14 days, but you can always reach out to an L2 to renew it while you earn your way to the 35,000 BANK membership threshold.',
    },
    {
      title: 'READ, FOLLOW, LISTEN AND LEARN',
      text: 'Subscribe, bookmark, and follow along to receive updates and news from the community:',
      badges: [
        'The Weekly Rollup',
        'Gearing Up',
        'Decentralized Law',
        'Decentralized Art',
        'State of the DAOs',
        'Crypto Sapiens',
        'Twitter',
        'Instagram',
        'Medium',
        'Mirror',
      ],
    },
    {
      title: 'GET PLUGGED INTO A PROJECT',
      text: 'Find a guild or project that interests you and begin joining meetings. The best ways to get to know contributors include joining synchronous meetings, introducing yourself in channels, and making a positive impression on the community by delivering on work. Yes, it’s really that easy to start working in bDAO.',
    },
  ]

  return (
    <>
      <Stack
        as={Box}
        spacing={{ base: 4, md: 6 }}
        py={{ base: 10, md: 18 }}
        mt={'4rem'}
      >
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
          fontWeight={600}
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          lineHeight={'110%'}
          color={'white.100'}
          textAlign={'center'}
        >
          How to join BanklessDAO
          <Underline />
        </Heading>
        <Flex
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'center'}
          width={'100%'}
        >
          <Box width={{ base: '300px', md: '330px' }}>
            <Slider {...settings} ref={(slider: unknown) => setSlider(slider)}>
              {cards.map((card, index) => (
                <Box key={index}>
                  <Box
                    boxShadow={'2xl'}
                    borderRadius='10px'
                    background='#222020'
                    maxWidth={'330px'}
                    minHeight={{ base: '450px', md: '500px' }}
                    padding='1.5rem'
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                  >
                    <Heading
                      fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                      color={'white'}
                      background={'red'}
                      textAlign={'center'}
                      borderRadius={'50%'}
                      padding={'0.3rem 0.9rem'}
                      width='min-content'
                    >
                      {index + 1}
                    </Heading>
                    <Heading
                      fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}
                      color={'white'}
                      mt={'1rem'}
                    >
                      {card.title}
                    </Heading>
                    <Text
                      fontSize={{ base: 'sm', lg: 'md' }}
                      color={'white'}
                      mt={'1rem'}
                    >
                      {card.text}
                    </Text>
                    {card.badges && (
                      <Flex
                        flexWrap={'wrap'}
                        justifyContent={'flex-start'}
                        mt={'1rem'}
                      >
                        {card.badges.map((badge, key) => {
                          return (
                            <Text
                              key={key}
                              fontSize={{ base: 'sm' }}
                              whiteSpace={'nowrap'}
                              color={'red'}
                              paddingRight={'0.7rem'}
                            >
                              {badge}
                            </Text>
                          )
                        })}
                      </Flex>
                    )}

                    <Flex
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      mt={'2rem'}
                    >
                      <IconButton
                        aria-label='left-arrow'
                        variant='ghost'
                        zIndex={2}
                        background='#565656'
                        borderRadius={'50%'}
                        color='white'
                        _hover={{
                          background: 'white',
                          color: 'black',
                        }}
                        onClick={() => slider?.slickPrev()}
                      >
                        <BiLeftArrowAlt size='40px' />
                      </IconButton>
                      <IconButton
                        aria-label='right-arrow'
                        variant='ghost'
                        zIndex={2}
                        background='#565656'
                        borderRadius={'50%'}
                        color='white'
                        _hover={{
                          background: 'white',
                          color: 'black',
                        }}
                        onClick={() => slider?.slickNext()}
                      >
                        <BiRightArrowAlt size='40px' />
                      </IconButton>
                    </Flex>
                  </Box>
                  <Progress
                    value={30 * (index + 1) + 10}
                    size='sm'
                    hasStripe
                    isAnimated
                    colorScheme='pink'
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Flex>
      </Stack>
    </>
  )
}
