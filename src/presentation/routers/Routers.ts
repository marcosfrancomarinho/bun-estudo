import type { Container } from '../../Container/Container';
import type { HttpServer } from '../../domain/interfaces/HttpSever';

export class Routers {
  constructor(private server: HttpServer) {}

  public register(container: Container) {
    const { creatorUserControllers, finderUserByNameControllers, finderUserAllControllers } = container.dependencies();

    this.server.on('post', '/create-user', creatorUserControllers.execute.bind(creatorUserControllers));
    this.server.on('get', '/finder-user', finderUserByNameControllers.execute.bind(finderUserByNameControllers));
    this.server.on('get', '/finder-user-all', finderUserAllControllers.execute.bind(finderUserAllControllers));
  }
}
