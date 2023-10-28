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

const Announcement = styled(Box)`
  a {
    text-decoration: underline;
  }
`

const FeaturedNews = styled(Box)`
  * {
    --swiper-theme-color: red;
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
    announcement: '',
    feed: [],
    featured: [],
  })

  useEffect(() => {
    try {
      fetch(`https://app.banklessacademy.com/api/cache/bankless-dao-news`)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          setLatestNews(response)
        })
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <Box zIndex={1} w='100%'>
      <Announcement>
        <Heading
          dangerouslySetInnerHTML={{
            __html: latestNews.announcement,
          }}></Heading>
      </Announcement>
      <Box display={{ base: 'block', xl: 'flex' }}>
        <Box display='block' width='70%'>
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
              navigation={true}
              modules={[Mousewheel, Keyboard, Autoplay, Pagination, Navigation]}
              className='mySwiper'>
              {latestNews.featured.map((news, index) => (
                <SwiperSlide key={`news-${index}`}>
                  <Image
                    src={news.image}
                    w='100%'
                    aspectRatio='1.9'
                    alt={`${news.website} - ${news.title}`}
                  />
                  <Box position='absolute'>
                    <Link href={news.link} isExternal>
                      {news.website} - {news.title}
                    </Link>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </FeaturedNews>
        </Box>
        <Box m={4}>
          <Heading>Latest news</Heading>
          <Box>
            {latestNews.feed.map((news, index) => (
              <Box key={`news-${index}`} mt={2}>
                <Link href={news.link} isExternal>
                  {news.title}
                </Link>
                <br />
                {news.website} • {formatDateDescription(news.pubDate)}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default News
