import Post from 'models/Post';
import { injectable } from 'tsyringe';

@injectable()
class GetPostByUserService {
  async execute(id: String): Promise<any[]> {
    const posts = await Post.find({
      author: id,
    })
      .populate('author')
      .exec();
    return posts;
  }
}

export { GetPostByUserService };
