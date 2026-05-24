import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * Local / `next start` handler for GET /api/news.
 * Production on Cloudflare Pages is served by `functions/api/news.ts` + KV.
 */
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    articles: [
      {
        title: 'Example headline',
        summary: 'Summary for local dev and Robot browser tests.',
        url: 'https://banklessdao.substack.com/',
      },
    ],
  })
}
