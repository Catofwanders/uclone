import { UserQueryArgs, Greeting } from "src/types/graph";

const resolvers = {
  Query: {
    user: (_, args: UserQueryArgs): Greeting => {
      return {
        error: false,
        text: `User info ${args.name}`,
      };
    },
  },
};

export default resolvers;
