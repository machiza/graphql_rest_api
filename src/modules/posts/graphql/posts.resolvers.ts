import { container } from 'tsyringe';

import { CreatePostService } from '../services/CreatePostService';
import { GetPostByUserService } from '../services/GetPostByUserService';

const postsResolvers = {
  Mutation: {
    async createPost(_, { input }): Promise<any> {
      const createPostService = container.resolve(CreatePostService);
      const post = await createPostService.execute(input);
      return post;
    },
  },
  Query: {
    async getPostByUser(_, { idUser }): Promise<any[]> {
      const getPostByUserService = container.resolve(GetPostByUserService);
      const posts = await getPostByUserService.execute(idUser);
      return posts;
    },
  },
};

export default postsResolvers;
