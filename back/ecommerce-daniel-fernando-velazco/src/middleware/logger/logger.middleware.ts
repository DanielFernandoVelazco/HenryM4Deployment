import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    next();
  }
}

export function globalLogger(
  req: Request,
  res: Response,
  nest: ()=>void,
){
  console.log(`Se ejecuto el controlador con el metodo ${req.method} en la ruta ${req.url}, en la fecha ${new Date().toUTCString()}`);
  nest();
}
