import { RequestCreateUserDTO } from '../../application/DTO/RequestCreateUserDTO';
import type { CreatorUserUseCase } from '../../domain/interfaces/CreatorUserUseCase';
import type { HttpContext } from '../../domain/interfaces/HttpContext';
import type { HttpControllers } from '../../domain/interfaces/HttpControllers';

type ParamsBody = { name: string; age: number };

export class CreatorUserControllers implements HttpControllers {
  constructor(private creatorUserHandler: CreatorUserUseCase) {}
  execute(httpContext: HttpContext): void {
    try {
      const { name, age } = httpContext.requestBody<ParamsBody>();
      const input: RequestCreateUserDTO = new RequestCreateUserDTO(name, age);
      const output = this.creatorUserHandler.save(input);
      httpContext.send(201, { userId: output.id, message: output.message });
    } catch (error) {
      httpContext.handlerError(error);
    }
  }
}
