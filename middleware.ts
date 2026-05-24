import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Edge-safe: avoid Node-only `accepts` (pulls in `path` / mime chain). Match prior behavior for API tests.
  const accept = request.headers.get('accept') ?? ''
  const xContent = request.headers.get('x-content-type') ?? ''
  const prefersMarkdown =
    xContent === 'markdown' || /\btext\/markdown\b/i.test(accept)

  const newHeaders = new Headers(request.headers)
  newHeaders.set('x-content-type', prefersMarkdown ? 'markdown' : 'html')

  return NextResponse.next({
    request: {
      headers: newHeaders,
    },
  })
}

export const config = {
  matcher: '/api/:path*',
}
