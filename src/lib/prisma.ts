import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  const prismaClient = new PrismaClient();

  const extendedPrismaClient = prismaClient.$extends({
    query: {
      $allOperations: async ({
        // model,
        // operation,
        args,
        query,
      }) => {
        // Todo: check user permissions
        return query(args);
      },
    },
  });


  return extendedPrismaClient;
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
