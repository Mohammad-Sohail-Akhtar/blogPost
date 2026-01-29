import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath =
    path === '/' ||
    path === '/login' ||
    path === '/signup'

  const token = request.cookies.get('token')?.value

  // Logged-in user trying to access public pages
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/profile', request.url))
  }

  // Not logged-in user trying to access protected pages
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/profile/:path*',
    '/verifyemail',
  ],
}
