import { User } from '../../domain/entities/User';
import type { CreateUser } from '../../domain/interfaces/CreateUser';
import type { CreatorUserUseCase } from '../../domain/interfaces/CreatorUserUseCase';
import { Age } from '../../domain/valuesobejct/Age';
import { Name } from '../../domain/valuesobejct/Name';
import type { RequestCreateUserDTO } from '../DTO/RequestCreateUserDTO';
import { ResponseCreateUserDTO } from '../DTO/ResponseCreateUserDTO';

export class CreatorUserHandler implements CreatorUserUseCase {
  constructor(private createUser: CreateUser) {}

  public save(input: RequestCreateUserDTO): ResponseCreateUserDTO {
    const name: Name = Name.create(input.name);
    const age: Age = Age.create(input.age);
    const user: User = User.create(name, age);
    const userCreated: User = this.createUser.create(user);
    const id: number = userCreated.getID();
    const message: string = userCreated.getUserCreatedMessage();
    return new ResponseCreateUserDTO(id, message);
  }
}
