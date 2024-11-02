import { NestMiddleware } from '@nestjs/common';
export declare class LoggerMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
export declare function globalLogger(req: Request, res: Response, nest: () => void): void;
