import type { HttpContext } from './HttpContext';

export interface HttpControllers {
  execute(httpContext: HttpContext): void;
}
