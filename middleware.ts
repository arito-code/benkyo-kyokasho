import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ALLOWED_EMAILS = [
  'info@g-knowthyself.com',
  'OtoI.snowman@gmail.com',
  'fujii@g-knowthyself.com',
  'asakura@g-knowthyself.com',
  'iida@g-knowthyself.com',
]

const PUBLIC_PATHS = ['/login', '/api/auth/request', '/api/auth/callback']

export function middleware(request: NextRequest) {
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

  try {
    const decoded = JSON.parse(atob(authCookie.value))
    if (!decoded.email || !ALLOWED_EMAILS.includes(decoded.email)) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  } catch {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
