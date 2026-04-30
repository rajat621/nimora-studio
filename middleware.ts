import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const blockedBots = [
  'GPTBot',
  'ClaudeBot',
  'PerplexityBot',
  'Google-Extended',
  'CCBot',
  'Amazonbot',
]

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get('user-agent') || ''

  if (blockedBots.some(bot => userAgent.includes(bot))) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  return NextResponse.next()
}
