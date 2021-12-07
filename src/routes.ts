import { Router } from 'express';
import { GetPostByUserController } from 'modules/posts/controllers/GetPostByUserController';
import { CreateUserController } from 'modules/users/controllers/CreateUserController';

const routes = Router();

const createUserController = new CreateUserController();
const getPostByUserController = new GetPostByUserController();

routes.post('/users', createUserController.handle);
routes.get('/posts/user/:id', getPostByUserController.handle);

export { routes };
