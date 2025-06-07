import type { HttpContext } from '../../domain/interfaces/HttpContext';
import type { HttpServer } from '../../domain/interfaces/HttpSever';
import type { Express, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import { ExpressHttpContext } from './ExpressHttpContext';

export class ExpressHttpServer implements HttpServer {
  private app: Express;
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
  }
  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`server online on http://localhost:${port}`);
    });
  }

  public on(method: 'get' | 'post' | 'delete' | 'put', path: string, handler: (httpContext: HttpContext) => void): void {
    this.app[method](path, (request: Request, response: Response) => {
      const httpContext = new ExpressHttpContext(request, response);
      handler(httpContext);
    });
  }
}
