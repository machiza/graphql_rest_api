import { User } from '@models/User';

test('it should be ok', () => {
  const user = new User();

  user.name = 'Armando';

  expect(user.name).toEqual('Armando');
});
