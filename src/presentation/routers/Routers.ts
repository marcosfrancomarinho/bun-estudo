import type { Container } from '../../container/Container';
import type { HttpServer } from '../../domain/interfaces/HttpSever';

export class Routers {
  constructor(private server: HttpServer) {}

  public register(container: Container) {
    const { creatorUserControllers, finderUserByNameControllers, finderUserAllControllers } = container.dependencies();

    this.server.on('post', '/create-user', creatorUserControllers.execute.bind(creatorUserControllers));
    this.server.on('get', '/find-user', finderUserByNameControllers.execute.bind(finderUserByNameControllers));
    this.server.on('get', '/find-user-all', finderUserAllControllers.execute.bind(finderUserAllControllers));
  }
}
