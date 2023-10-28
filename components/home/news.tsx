import React, { useEffect, useState } from 'react'
import { Box, Link, ListItem, UnorderedList } from '@chakra-ui/react'

export interface FeedType {
  title: string
  link: string
  pubDate: string
  website: string
  image?: string
}

export interface NewsType {
  feed: FeedType[]
  featured: FeedType[]
}

const News = (): React.ReactElement => {
  const [latestNews, setLatestNews] = useState<NewsType>({
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
    <Box zIndex={1}>
      <Box>Announcement</Box>
      <Box>
        <Box>
          Featured news
          <UnorderedList>
            {latestNews.featured.map((news, index) => (
              <ListItem key={`news-${index}`}>
                <Link href={news.link} isExternal>
                  {news.website} - {news.title}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
        <Box>
          Latest news
          <UnorderedList>
            {latestNews.feed.map((news, index) => (
              <ListItem key={`news-${index}`}>
                <Link href={news.link} isExternal>
                  {news.website} - {news.title}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  )
}

export default News
