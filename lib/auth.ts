import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const secretKey = process.env.JWT_SECRET

function getEncodedKey() {
  const secret = secretKey || (process.env.NODE_ENV === 'production' ? null : 'insecure-dev-secret-do-not-use-in-production')

  if (!secret) {
    if (process.env.NEXT_PHASE === 'phase-production-build') {
      return new TextEncoder().encode('dummy-secret-for-build')
    }
    throw new Error('JWT_SECRET environment variable is not set')
  }

  return new TextEncoder().encode(secret)
}

export async function encrypt(payload: Record<string, unknown>) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(getEncodedKey())
}

export async function decrypt(input: string): Promise<Record<string, unknown>> {
  const { payload } = await jwtVerify(input, getEncodedKey(), {
    algorithms: ['HS256'],
  })
  return payload as Record<string, unknown>
}

export async function login(user: { id: string; email: string; name: string | null }) {
  const expires = new Date(Date.now() + 2 * 60 * 60 * 1000)
  const session = await encrypt({ user, expires: expires.toISOString() })

  const cookieStore = await cookies()
  cookieStore.set('session', session, { expires, httpOnly: true, secure: process.env.NODE_ENV === 'production' })
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.set('session', '', { expires: new Date(0) })
}

export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value
  if (!session) return null
  try {
    return await decrypt(session)
  } catch {
    return null
  }
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value
  if (!session) return

  try {
    const parsed = await decrypt(session)
    const expires = new Date(Date.now() + 2 * 60 * 60 * 1000)
    parsed.expires = expires.toISOString()
    const res = NextResponse.next()
    res.cookies.set({
      name: 'session',
      value: await encrypt(parsed),
      httpOnly: true,
      expires: expires,
      secure: process.env.NODE_ENV === 'production'
    })
    return res
  } catch {
    return
  }
}
