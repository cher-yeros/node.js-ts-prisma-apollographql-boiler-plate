import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["info", "query", "warn", "error"],

  //   hooks: {
  //     onConnect: () => {
  //       console.log("Prisma connected to the database");
  //     },
  //   },
  //   hooks: {
  //     afterConnect: (client) => {
  //       console.log("Prisma connected to the database");
  //     },
  //   },
});

// prisma.$on("query", () => {
//   console.log("Database connection opened");
// });

console.log("💎  Prisma connected to the database");

export default prisma;
