import type { RequestCreateUserDTO } from '../../application/DTO/RequestCreateUserDTO';
import type { ResponseCreateUserDTO } from '../../application/DTO/ResponseCreateUserDTO';

export interface CreatorUserUseCase {
  save(input: RequestCreateUserDTO): ResponseCreateUserDTO;
}
