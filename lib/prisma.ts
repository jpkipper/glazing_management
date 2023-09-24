declare global {
  namespace NodeJS {
    interface Global {
      prisma?: import(".prisma/client").PrismaClient;
    }
  }
}

let prisma;

if (typeof global.prisma === "undefined") {
  global.prisma = new PrismaClient();
}

prisma = global.prisma;

export default prisma;