import { User } from '../../domain/entities/User';
import type { FindUser } from '../../domain/interfaces/FindUser';
import { Age } from '../../domain/valuesobejct/Age';
import { ID } from '../../domain/valuesobejct/ID';
import { Name } from '../../domain/valuesobejct/Name';
import { client } from '../database/Client';

export class SqliteFindUser implements FindUser {
  public findByName(name: Name): User | null {
    const userName: string = name.getValue();
    const command = client.prepare(`SELECT id, name, age FROM user WHERE name = ?`);
    const userFound = command.get(userName) as { id: number; name: string; age: number };
    if (!userFound) return null;
    const user: User = User.create(name, Age.create(userFound.age));
    user.setId(ID.create(userFound.id));
    return user;
  }
  public findAll(): User[] | null {
    const users = client.query('SELECT id, name, age FROM user').all() as { name: string; age: number; id: number }[];
    if (users.length === 0) return null;
    const usersFound: User[] = users.map((user) => {
      const userGenereted: User = User.create(Name.create(user.name), Age.create(user.age));
      userGenereted.setId(ID.create(user.id));
      return userGenereted;
    });
    return usersFound;
  }
}
