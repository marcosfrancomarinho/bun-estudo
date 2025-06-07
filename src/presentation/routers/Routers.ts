import type { Container } from '../../container/Container';
import type { HttpContext } from '../../domain/interfaces/HttpContext';
import type { HttpControllers } from '../../domain/interfaces/HttpControllers';
import type { HttpServer } from '../../domain/interfaces/HttpSever';

export class Routers {
  constructor(private server: HttpServer) {}

  private asHandler(controller: HttpControllers): (httpContext: HttpContext) => void {
    return controller.execute.bind(controller);
  }

  public register(container: Container) {
    const { creatorUserControllers, finderUserByNameControllers, finderUserAllControllers } = container.dependencies();

    this.server.on('post', '/create-user', this.asHandler(creatorUserControllers));
    this.server.on('get', '/find-user', this.asHandler(finderUserByNameControllers));
    this.server.on('get', '/find-user-all', this.asHandler(finderUserAllControllers));
  }
}
