import prisma from "../utils/db_connection";

export const userSchema = `#graphql
    type User {
       id: ID!
       username: String!
       email: String!
       firstName: String!
       lastName: String!
       age: Int
       gender: String
    
    }

    extend type Query {
        hello: String
    }

    extend type Mutation {
        createUser(username: String, email: String, firstName: String, lastName: String, age: Int, gender: String): User
    }
`;

// src/schema/resolvers.ts

export const userResolvers = {
  Query: {
    hello: () => {
      return "Hello, world!";
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      { firstName, lastName }: { firstName: string; lastName: string }
    ) => {
      console.log({ firstName, lastName });
      const newUser = await prisma.user.create({
        data: {
          fullname: `${firstName} ${lastName}`,
          email: "yerosh@gmail.com",
        },
      });

      console.log(newUser);
      return newUser;
    },
  },
};
