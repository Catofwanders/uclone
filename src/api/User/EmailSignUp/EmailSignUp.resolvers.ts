import {
  EmailSignUpResponse,
  EmailSignUpMutationArgs,
} from "../../../types/graph";
import User from "../../../entities/User";
import { Resolvers } from "../../../types/resolvers";
import createJWT from "../../../utils/createJWT";

const resolvers: Resolvers = {
  Mutation: {
    EmailSignUp: async (
      _,
      args: EmailSignUpMutationArgs
    ): Promise<EmailSignUpResponse> => {
      const { email } = args;
      try {
        const existingUser = await User.findOne({ email });
        console.log(
          "!!!!!!!!!!!!!!!!!!!!!!existingUser!!!!!!!!!!!!!!!!!",
          existingUser
        );
        if (existingUser) {
          return {
            ok: false,
            error: "You should login instead",
            token: null,
          };
        } else {
          const newUser = await User.create({ ...args }).save();
          const token = createJWT(newUser.id);
          return {
            ok: true,
            error: null,
            token,
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message || "bla bla",
          token: null,
        };
      }
    },
  },
};

export default resolvers;
