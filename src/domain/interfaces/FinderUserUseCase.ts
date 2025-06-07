import type { RequestFinderUserDTO } from '../../application/DTO/RequestFinderUserDTO';
import type { ResponseFinderUserDTO } from '../../application/DTO/ResponseFinderUserDTO';

export interface FinderUserUseCase {
  findByName(input: RequestFinderUserDTO): ResponseFinderUserDTO;
  findAll(): ResponseFinderUserDTO[];
}
