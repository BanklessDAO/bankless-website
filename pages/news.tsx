import { Box, Heading, VStack, Spinner, Text } from '@chakra-ui/react'
import PageContainer from 'components/_common/page-container'
import NewsArticle from 'components/news/NewsArticle'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

interface Article {
  title: string
  summary: string
  url: string
}

const News: NextPage = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news')
        if (!res.ok) {
          throw new Error('Failed to fetch news')
        }
        const raw = await res.json()
        let items: unknown[] = []
        if (Array.isArray(raw)) {
          items = raw
        } else if (raw && typeof raw === 'object' && 'articles' in raw) {
          const { articles } = raw as { articles?: unknown }
          items = Array.isArray(articles) ? articles : []
        }
        const normalized: Article[] = items.map((item) => {
          const a = item as Record<string, string>
          return {
            title: a.title ?? '',
            summary: a.summary ?? a.description ?? '',
            url: a.url ?? a.link ?? '',
          }
        })
        setArticles(normalized)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    <PageContainer>
      <Box>
        <Heading as="h1" size="2xl" textAlign="center" my={10}>
          News
        </Heading>
        <VStack spacing={8}>
          {loading && <Spinner />}
          {error && <Text color="red.500">{error}</Text>}
          {articles.map((article, index) => (
            <NewsArticle key={index} article={article} />
          ))}
        </VStack>
      </Box>
    </PageContainer>
  )
}

export default News

