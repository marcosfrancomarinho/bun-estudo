import type { ResponseFinderUserDTO } from '../../application/DTO/ResponseFinderUserDTO';
import type { FinderUserUseCase } from '../../domain/interfaces/FinderUserUseCase';
import type { HttpContext } from '../../domain/interfaces/HttpContext';
import type { HttpControllers } from '../../domain/interfaces/HttpControllers';

export class FinderUserAllControllers implements HttpControllers {
  constructor(private finderUserUseCase: FinderUserUseCase) {}

  public execute(httpContext: HttpContext): void {
    try {
      const output: ResponseFinderUserDTO[] = this.finderUserUseCase.findAll();
      httpContext.send(200, output);
    } catch (error) {
      httpContext.handlerError(error);
    }
  }
}
