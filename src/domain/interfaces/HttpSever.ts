import type { HttpContext } from './HttpContext';

type Method = 'get' | 'post' | 'delete' | 'put';

export interface HttpServer {
  listen(port: number): void;
  on(method: Method, path: string, handler: (httpContext: HttpContext) => void): void;
}
