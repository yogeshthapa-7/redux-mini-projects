import { prisma } from '@/lib/prisma'
import { signupSchema } from '@/lib/validation/signupSchema'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import { login } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    try {
      await signupSchema.validate(body)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Validation failed'
      return NextResponse.json({ message }, { status: 400 })
    }

    const { email, password, name } = body

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })

    await login({ id: user.id, email: user.email, name: user.name })

    return NextResponse.json({
      message: 'User created successfully',
      user: { id: user.id, email: user.email, name: user.name }
    }, { status: 201 })

  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
