/**
 * Cloudflare Pages Function — GET /api/fetch-news + Scheduled handler
 *
 * HTTP handler:   manual trigger via GET /api/fetch-news
 * Scheduled:      invoked by Cloudflare Cron Trigger (see wrangler.toml: 0 * * * *)
 *
 * Fetches RSS from BanklessDAO Substack, stores up to 10 articles in
 * Cloudflare KV under key "latest_news" with a 2-hour TTL.
 *
 * RSS feed: https://banklessdao.substack.com/feed
 *   (confirm this URL is still active; fallback: https://www.bankless.community/rss)
 */

const RSS_FEED_URL = 'https://banklessdao.substack.com/feed'
const MAX_ARTICLES = 10
const KV_KEY = 'latest_news'
const KV_TTL_SECONDS = 7200

interface Env {
  NEWS_KV: KVNamespace
}

export interface NewsArticle {
  title: string
  link: string
  pubDate: string
  description: string
}

async function fetchAndStoreNews(env: Env): Promise<void> {
  const response = await fetch(RSS_FEED_URL, {
    headers: { 'User-Agent': 'BanklessWebsite-NewsCrawler/1.0' },
  })

  if (!response.ok) {
    throw new Error(`RSS feed responded with HTTP ${response.status}`)
  }

  const xml = await response.text()
  const articles = parseRssArticles(xml).slice(0, MAX_ARTICLES)

  const payload = { fetchedAt: new Date().toISOString(), articles }
  await env.NEWS_KV.put(KV_KEY, JSON.stringify(payload), { expirationTtl: KV_TTL_SECONDS })
}

function parseRssArticles(xml: string): NewsArticle[] {
  const articles: NewsArticle[] = []
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  let match: RegExpExecArray | null

  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1]
    const title = extractTag(item, 'title')
    const link = extractTag(item, 'link')
    const pubDate = extractTag(item, 'pubDate')
    const description = extractTag(item, 'description')
    if (title && link) articles.push({ title, link, pubDate, description })
  }
  return articles
}

function extractTag(xml: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`, 'i')
  const m = re.exec(xml)
  return m ? m[1].trim() : ''
}

interface EnvWithSecret extends Env {
  FETCH_NEWS_SECRET?: string
}

export const onRequestGet: PagesFunction<EnvWithSecret> = async ({ env, request }) => {
  const secret = request.headers.get('X-Secret-Token')
  if (env.FETCH_NEWS_SECRET && secret !== env.FETCH_NEWS_SECRET) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }
  try {
    await fetchAndStoreNews(env)
    return new Response(JSON.stringify({ success: true, updated: new Date().toISOString() }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export async function scheduled(_event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
  ctx.waitUntil(fetchAndStoreNews(env).catch(err => console.error('[fetch-news] scheduled run failed:', err)))
}
