/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`Estas Ejecutando Un Metodo ${req.method} en la ruta ${req.url}`);
        next();
    }
}

export function loogerGlobal(req: Request, res: Response, next: NextFunction) {
    console.log(`Estas Ejecutando Un Metodo ${req.method} en la ruta ${req.url}. La hora de ${new Date().getHours()} : ${new Date().getMinutes()}`);
    next();
}