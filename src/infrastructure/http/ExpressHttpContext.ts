import type { HttpContext } from '../../domain/interfaces/HttpContext';
import type { Request, Response } from 'express';

export class ExpressHttpContext implements HttpContext {
  constructor(private request: Request, private response: Response) {}

  public handlerError(error: any): void {
    this.response.status(400).json({ error: error.message });
  }
  public requestBody<T>(): T {
    const raw = this.request.body as T;
    return raw;
  }
  public send(status: number, data: any): void {
    this.response.status(status).json(data);
  }
  public requestQuery<T>(): T {
    const raw = this.request.query as T;
    return raw;
  }
}
