// Single shared Prisma client instance.
// Next.js hot-reloads in dev, which would otherwise create a new
// database connection on every file save — this pattern prevents that.
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
