import { PrismaClient } from "@prisma/client";

const singletonPrismaClient = () => {
  return new PrismaClient();
};

declare global {
  // eslint-disable-next-line no-var
  var db: undefined | ReturnType<typeof singletonPrismaClient>;
}

export const db = globalThis.db ?? singletonPrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.db = db;
