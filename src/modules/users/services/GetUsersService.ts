import { User } from 'models/User';
import { injectable } from 'tsyringe';

@injectable()
class GetusersService {
  async execute(): Promise<User[]> {
    const users = await User.find();
    return users;
  }
}

export { GetusersService };
