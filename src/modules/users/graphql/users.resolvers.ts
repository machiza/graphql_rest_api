import { container } from 'tsyringe';

import { User } from '@models/User';

import { CreateUserService } from '../services/CreateUserService';
import { GetusersService } from '../services/GetUsersService';

const usersResolvers = {
  Query: {
    async getAllUsers(): Promise<User[]> {
      const getUsersService = container.resolve(GetusersService);
      const users = await getUsersService.execute();
      return users;
    },
  },
  Mutation: {
    async createUser(_, { input }): Promise<User> {
      const createUserService = container.resolve(CreateUserService);
      const user = await createUserService.execute(input);
      return user;
    },
  },
};

export default usersResolvers;
