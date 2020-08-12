import {
  EmailSignUpResponse,
  EmailSignUpMutationArgs,
} from "../../../types/graph";
import User from "../../../entities/User";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    PhoneVerification: async (
      _,
      args: EmailSignUpMutationArgs
    ): Promise<EmailSignUpResponse> => {
      const { email } = args;

      try {
        const existingUser = User.findOne({ email });
        if (existingUser) {
          return {
            ok: false,
            error: "You should login instead",
            token: null,
          };
        } else {
          await User.create({ ...args }).save();
          return {
            ok: true,
            error: null,
            token: "Coming Soon",
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        };
      }
    },
  },
};

export default resolvers;
