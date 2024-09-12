import { users } from "../data/users.data";

export const resolvers = {
    Query: {
        users: () => users,
        user: (parent, args, context, info) => {
            const { uid } = args.id
            //con filter
           return users.filter((user) => user.id === uid);
           //con find            
           //return users.find((user) => user.id === uid);
          },
    }
};