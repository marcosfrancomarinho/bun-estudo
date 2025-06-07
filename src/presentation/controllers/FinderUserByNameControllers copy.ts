import { RequestFinderUserDTO } from '../../application/DTO/RequestFinderUserDTO';
import type { FinderUserUseCase } from '../../domain/interfaces/FinderUserUseCase';
import type { HttpContext } from '../../domain/interfaces/HttpContext';
import type { HttpControllers } from '../../domain/interfaces/HttpControllers';
type ParamsQuery = { name: string };

export class FinderUserByNameControllers implements HttpControllers {
  constructor(private finderUserUserCase: FinderUserUseCase) {}

  public execute(httpContext: HttpContext): void {
    try {
      const { name } = httpContext.requestQuery<ParamsQuery>();
      const input: RequestFinderUserDTO = new RequestFinderUserDTO(name);
      const output = this.finderUserUserCase.findByName(input);
      httpContext.send(200, { userId: output.id, name: output.name, age: output.age });
    } catch (error) {
      httpContext.handlerError(error);
    }
  }
}
