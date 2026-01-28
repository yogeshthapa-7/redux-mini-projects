import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/lib/auth'

// 1. Specify protected and public routes
const protectedRoutes = ['/f1home']
const publicRoutes = ['/auth', '/']

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  // 3. Decrypt the session from the cookie
  const cookie = req.cookies.get('session')?.value
  const session = cookie ? await decrypt(cookie).catch(() => null) : null

  // 4. Redirect to /auth if the user is not authenticated
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/auth', req.nextUrl))
  }

  // 5. Redirect to /f1home if the user is authenticated
  if (
    isPublicRoute &&
    session &&
    !req.nextUrl.pathname.startsWith('/f1home')
  ) {
    return NextResponse.redirect(new URL('/f1home', req.nextUrl))
  }

  return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
