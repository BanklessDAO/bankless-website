import { Box, Heading, Text, Link, VStack } from '@chakra-ui/react'
import { isValidUrl } from '../utils/url'

interface Article {
  title: string
  summary: string
  url: string
}

interface NewsArticleProps {
  article: Article
}

const NewsArticle: React.FC<NewsArticleProps> = ({ article }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <VStack align="stretch" spacing={4}>
        <Heading fontSize="xl">{article.title}</Heading>
        <Text mt={4}>{article.summary}</Text>
        {isValidUrl(article.url) ? (
          <Link href={article.url} isExternal color="red.500">
            Read more about {article.title}
          </Link>
        ) : (
          <Text color="gray.500">Invalid URL</Text>
        )}
      </VStack>
    </Box>
  )
}

export default NewsArticle
