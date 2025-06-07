import { Container } from './container/Container';
import type { HttpServer } from './domain/interfaces/HttpSever';
import { ExpressHttpServer } from './infrastructure/http/ExpressHttpServer';
import { Routers } from './presentation/routers/Routers';

function main(): void {
  const port: number = Number(process.env.PORT ?? '3000');
  const httpServer: HttpServer = new ExpressHttpServer();
  const routers: Routers = new Routers(httpServer);
  const container: Container = new Container();
  routers.register(container);
  httpServer.listen(port);
}
main();
