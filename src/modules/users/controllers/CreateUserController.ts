import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '@models/User';

import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<User> {
    const { name, username } = request.body;

    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.execute({ name, username });

    return response.json(user);
  }
}

export { CreateUserController };
