'use server'
import { Roles } from '@/lib/types'
import { auth } from '@clerk/nextjs/server'

export const checkRole = async (role: Roles) => {
  const { sessionClaims } = await auth()
  return sessionClaims?.metadata.role === role
}