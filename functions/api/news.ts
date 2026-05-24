/**
 * Cloudflare Pages Function — GET /api/news
 *
 * Returns cached news articles from the NEWS_KV KV namespace.
 * Bind the KV namespace in the Cloudflare Pages dashboard:
 *   Settings → Functions → KV namespace bindings → Variable name: NEWS_KV
 */

import { CORS_ORIGIN } from '../../config/cors'

interface Env {
  NEWS_KV: KVNamespace
}

type StoredArticle = {
  title: string
  link?: string
  description?: string
  pubDate?: string
}

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': CORS_ORIGIN,
  }

  const cached = await env.NEWS_KV.get('latest_news')

  if (cached) {
    try {
      const payload = JSON.parse(cached) as {
        articles?: StoredArticle[]
      }
      const articles = (payload.articles ?? []).map((a) => ({
        title: a.title,
        summary: a.description ?? '',
        url: a.link ?? '',
      }))
      return new Response(JSON.stringify({ articles }), { headers })
    } catch {
      return new Response(JSON.stringify({ articles: [] }), { headers })
    }
  }

  return new Response(JSON.stringify({ articles: [] }), { headers })
}
