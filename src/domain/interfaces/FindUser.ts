import type { User } from '../entities/User';
import type { Name } from '../valuesobejct/Name';

export interface FindUser {
  findByName(name: Name): User | null;
  findAll(): User[] | null;
}
