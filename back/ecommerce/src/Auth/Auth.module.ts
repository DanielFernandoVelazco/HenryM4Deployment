/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AuthsService } from "./Auth.service";
import { AuthsController } from "./Auth.controller";
import { LoggerMiddleware } from '../Middlewares/logger.middleware';

@Module({
    providers: [AuthsService],
    controllers: [AuthsController],
})

export class AuthsModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('auths');
    }
}