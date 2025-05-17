import { PrismaClient } from '@/generated/prisma'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Evitar múltiples instancias de Prisma Client en desarrollo con hot reload
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
} 