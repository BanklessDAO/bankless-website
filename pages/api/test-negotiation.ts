import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const contentType = req.headers['x-content-type']

  if (contentType === 'markdown') {
    res.setHeader('Content-Type', 'text/markdown')
    res.status(200).send('# This is a markdown response')
  } else {
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send('<h1>This is an HTML response</h1>')
  }
}
