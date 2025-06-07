export interface HttpContext {
  requestBody<T>(): T;
  requestQuery<T>(): T;
  send(status: number, data: any): void;
  handlerError(error: any): void;
}
