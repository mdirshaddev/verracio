import { PrismaClient } from '@prisma/client';

const globalPrisma = global as unknown as { nextPrismaClient: PrismaClient };

export const nextPrismaClient: PrismaClient =
  globalPrisma.nextPrismaClient ||
  new PrismaClient({
    log: ['info', 'warn', 'error', 'query']
  });

if (process.env.NODE_ENV !== 'production')
  globalPrisma.nextPrismaClient = nextPrismaClient;
