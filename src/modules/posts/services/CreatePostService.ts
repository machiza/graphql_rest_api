import Post from 'models/Post';
import { injectable } from 'tsyringe';

interface IPostRequest {
  content: string;
  author: string;
}

@injectable()
class CreatePostService {
  async execute(data: IPostRequest): Promise<any> {
    console.log('data: ', data);
    const post = await Post.create(data);
    await post.populate({ path: 'author' });
    return post;
  }
}

export { CreatePostService };
