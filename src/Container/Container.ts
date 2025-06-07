import { CreatorUserHandler } from '../application/usecase/CreatorUserHandler';
import { FinderUserHandler } from '../application/usecase/FinderUserHandler';
import type { CreateUser } from '../domain/interfaces/CreateUser';
import type { CreatorUserUseCase } from '../domain/interfaces/CreatorUserUseCase';
import type { FinderUserUseCase } from '../domain/interfaces/FinderUserUseCase';
import type { FindUser } from '../domain/interfaces/FindUser';
import type { HttpControllers } from '../domain/interfaces/HttpControllers';
import { SqliteCreateUser } from '../infrastructure/repository/SqliteCreateUser';
import { SqliteFindUser } from '../infrastructure/repository/SqliteFindUser';
import { CreatorUserControllers } from '../presentation/controllers/CreatorUserControllers';
import { FinderUserAllControllers } from '../presentation/controllers/FinderUserAllControllers';
import { FinderUserByNameControllers } from '../presentation/controllers/FinderUserByNameControllers copy';

export class Container {
  public dependencies() {
    const createUserRepository: CreateUser = new SqliteCreateUser();
    const creatorUserUseCase: CreatorUserUseCase = new CreatorUserHandler(createUserRepository);
    const creatorUserControllers: HttpControllers = new CreatorUserControllers(creatorUserUseCase);

    const finduserRepository: FindUser = new SqliteFindUser();
    const finderUserUseCase: FinderUserUseCase = new FinderUserHandler(finduserRepository);

    const finderUserByNameControllers: HttpControllers = new FinderUserByNameControllers(finderUserUseCase);
    const finderUserAllControllers: HttpControllers = new FinderUserAllControllers(finderUserUseCase);

    return {
      creatorUserControllers,
      finderUserByNameControllers,
      finderUserAllControllers,
    };
  }
}
