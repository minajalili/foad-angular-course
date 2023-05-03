import { user } from '../intefaces/user-iterface';

export class UserService {
  public user: user[] = [
    { email: 'omid@email.com', address: 'test Ave', password: '123' },
    { email: 'mohammad@email.com', address: 'test2 Ave', password: '12345' },
    { email: 'mehrshad@email.com', address: 'test3 Ave', password: '1234567' },
  ];
}
