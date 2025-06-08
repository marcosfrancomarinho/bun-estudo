import type { User } from '../../domain/entities/User';
import type { FinderUserUseCase } from '../../domain/interfaces/FinderUserUseCase';
import type { FindUser } from '../../domain/interfaces/FindUser';
import { Name } from '../../domain/valuesobejct/Name';
import type { RequestFinderUserDTO } from '../DTO/RequestFinderUserDTO';
import { ResponseFinderUserDTO } from '../DTO/ResponseFinderUserDTO';

export class FinderUserHandler implements FinderUserUseCase {
  constructor(private findUser: FindUser) {}

  public findByName(input: RequestFinderUserDTO): ResponseFinderUserDTO {
    const name: Name = Name.create(input.name);
    const user: User | null = this.findUser.findByName(name);
    if (!user) throw new Error(`user ${name.getValue()} not found`);
    return new ResponseFinderUserDTO(user.getID(), name.getValue(), user.getAge());
  }
  
  public findAll(): ResponseFinderUserDTO[] {
    const users: User[] | null = this.findUser.findAll();
    if (!users) throw new Error(`no users found`);
    const usersFound: ResponseFinderUserDTO[] = users.map((user) => {
      return new ResponseFinderUserDTO(user.getID(), user.getName(), user.getAge());
    });
    return usersFound;
  }
}
