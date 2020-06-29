export const typeDefs = ["type Greeting {\n  text: String!\n  error: Boolean!\n}\n\ntype Query {\n  user(name: String!): Greeting!\n}\n"];
/* tslint:disable */

export interface Query {
  user: Greeting;
}

export interface UserQueryArgs {
  name: string;
}

export interface Greeting {
  text: string;
  error: boolean;
}
