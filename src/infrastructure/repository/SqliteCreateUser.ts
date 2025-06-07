import { User } from '../../domain/entities/User';
import type { CreateUser } from '../../domain/interfaces/CreateUser';
import { ID } from '../../domain/valuesobejct/ID';
import { client } from '../database/Client';

export class SqliteCreateUser implements CreateUser {
  public create(user: User): User {
    const command = client.prepare(`INSERT INTO user (name, age) VALUES (?, ?)`);
    const { lastInsertRowid } = command.run(user.getName(), user.getAge());
    const userId: ID = ID.create(Number(lastInsertRowid));
    user.setId(userId);
    return user;
  }
}
