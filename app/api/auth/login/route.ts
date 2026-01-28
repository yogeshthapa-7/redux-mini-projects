import { prisma } from '@/lib/prisma'
import { loginSchema } from '@/lib/validation/loginSchema'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import { login } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    try {
      await loginSchema.validate(body)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Validation failed'
      return NextResponse.json({ message }, { status: 400 })
    }

    const { email, password } = body

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
    }

    await login({ id: user.id, email: user.email, name: user.name })

    return NextResponse.json({
      message: 'Login successful',
      user: { id: user.id, email: user.email, name: user.name }
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
