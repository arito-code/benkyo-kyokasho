import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ALLOWED_EMAILS = [
  'info@g-knowthyself.com',
  'OtoI.snowman@gmail.com',
  'fujii@g-knowthyself.com',
  'asakura@g-knowthyself.com',
  'iida@g-knowthyself.com',
  'maekawa@tomoiki-works.jp',
  'minamida@kanbutsu.co.jp',
]

const PUBLIC_PATHS = ['/login', '/api/auth/request', '/api/auth/callback']
const FALLBACK_SECRET = 'benkyo-kyokasho-default-secret-change-in-production'

function getAuthSecret(): string {
  return process.env.AUTH_SECRET || FALLBACK_SECRET
}

async function createSignature(payload: string): Promise<string> {
  const secret = getAuthSecret()
  const encoder = new TextEncoder()
  const keyData = encoder.encode(secret)
  const data = encoder.encode(payload)
  
  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  
  const signature = await crypto.subtle.sign('HMAC', key, data)
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

async function verifySignature(payload: string, signature: string): Promise<boolean> {
  const expectedSignature = await createSignature(payload)
  
  if (signature.length !== expectedSignature.length) {
    return false
  }
  
  let result = 0
  for (let i = 0; i < signature.length; i++) {
    result |= signature.charCodeAt(i) ^ expectedSignature.charCodeAt(i)
  }
  return result === 0
}

async function parseAndVerifyToken(token: string): Promise<{ email: string; ts: number } | null> {
  try {
    const parts = token.split('.')
    if (parts.length !== 2) {
      return null
    }
    
    const [payloadBase64, signature] = parts
    const payload = atob(payloadBase64)
    
    const isValid = await verifySignature(payload, signature)
    if (!isValid) {
      return null
    }
    
    const decoded = JSON.parse(payload)
    if (decoded.email && typeof decoded.ts === 'number') {
      return decoded
    }
    return null
  } catch {
    return null
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/_next') || pathname.startsWith('/icon.svg')) {
    return NextResponse.next()
  }

  const authCookie = request.cookies.get('study_auth')

  if (!authCookie?.value) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  const parsed = await parseAndVerifyToken(authCookie.value)
  
  if (!parsed) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  const normalizedEmail = parsed.email.toLowerCase()
  const isAllowed = ALLOWED_EMAILS.some((e) => e.toLowerCase() === normalizedEmail)
  
  if (!isAllowed) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  const maxAge = 30 * 24 * 60 * 60 * 1000
  if (Date.now() - parsed.ts > maxAge) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
