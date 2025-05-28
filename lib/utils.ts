import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { PrismaClient } from './generated/prisma/client'

export const prisma = new PrismaClient()

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
