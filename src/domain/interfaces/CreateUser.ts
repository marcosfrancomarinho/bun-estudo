import type { User } from '../entities/User';

export interface CreateUser {
  create(user: User): User;
}
