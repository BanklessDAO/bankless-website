import React, { useEffect, useState } from 'react'
import { Image, Box, Heading, Link } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Mousewheel,
  Keyboard,
  Autoplay,
  Pagination,
  Navigation,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Card from 'components/_common/Card'

export interface FeedType {
  title: string
  link: string
  pubDate: string
  website: string
  image?: string
}

export interface NewsType {
  announcement: string
  feed: FeedType[]
  featured: FeedType[]
}

const Announcement = styled(Card)`
  a {
    text-decoration: underline;
  }
`

const FeaturedNews = styled(Box)`
  * {
    --swiper-theme-color: red;
  }
  .mySwiper {
    border-radius: 12px;
    border: 1px solid #333a40;
    overflow: hidden;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
  .swiper-pagination {
    /* bottom: -20px; */
  }
  .swiper-pagination-bullet {
    width: 11px;
    height: 11px;
    background: white;
    opacity: 0.8;
  }
  .swiper-pagination-bullet-active {
    background: red !important;
  }
`

const formatDateDescription = targetDate => {
  const currentDate = new Date()
  const timeDifference =
    currentDate.getTime() - Date.parse(targetDate).valueOf()
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  if (daysDifference === 0) {
    return 'today'
  } else if (daysDifference === 1) {
    return 'yesterday'
  } else if (daysDifference <= 7) {
    return `${daysDifference} days ago`
  } else if (daysDifference <= 14) {
    return 'last week'
  } else {
    const weeksDifference = Math.floor(daysDifference / 7)
    return `${weeksDifference} weeks ago`
  }
}

const News = (): React.ReactElement => {
  const [latestNews, setLatestNews] = useState<NewsType>({
    announcement: '<p>&nbsp;</p>',
    feed: [],
    featured: [
      {
        title: '',
        link: '/',
        pubDate: 'now',
        website: '',
        image:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
      },
    ],
  })

  useEffect(() => {
    try {
      fetch(`https://app.banklessacademy.com/api/cache/bankless-dao-news`)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          setLatestNews(response.data)
        })
        .catch(rejected => {
          console.log(rejected)
        })
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <Box zIndex={1} w='100%'>
      <Announcement mb='6' minH='120px'>
        <Heading
          color='white'
          size={{ base: 'lg' }}
          dangerouslySetInnerHTML={{
            __html: latestNews.announcement,
          }}></Heading>
      </Announcement>
      <Box display={{ base: 'block', xl: 'flex' }} w='100%'>
        <Box
          display='block'
          width={{ base: '100%', xl: '70%' }}
          mr={{ base: '0', xl: '4' }}
          mb={{ base: '4', xl: '0' }}>
          <FeaturedNews>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Mousewheel, Keyboard, Autoplay, Pagination, Navigation]}
              className='mySwiper'>
              {latestNews.featured.map((news, index) => (
                <SwiperSlide key={`news-${index}`}>
                  <Link href={news.link} isExternal w='100%'>
                    <Box
                      textAlign='left'
                      background='whiteAlpha.200'
                      p='4'
                      fontSize='md'
                      minH='68px'>
                      <Heading as='h2' size='lg' color='white'>
                        {news.title}
                      </Heading>
                      {news.website}
                    </Box>
                    <Image
                      src={news.image}
                      w='100%'
                      aspectRatio='1.9'
                      alt={`${news.website} - ${news.title}`}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </FeaturedNews>
        </Box>
        <Box w='100%'>
          <Card minH='538px'>
            <Heading as='h2' size='lg' color='white'>
              Latest News
            </Heading>
            {latestNews.feed.map((news, index) => (
              <Box key={`news-${index}`} mt={3}>
                <Link href={news.link} isExternal color='white' fontSize='lg'>
                  {news.title}
                  <br />
                  <Box color='whiteAlpha.500'>
                    {news.website} • {formatDateDescription(news.pubDate)}
                  </Box>
                </Link>
              </Box>
            ))}
          </Card>
        </Box>
      </Box>
    </Box>
  )
}

export default News
