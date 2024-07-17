/* eslint-disable prettier/prettier */
import { Module, MiddlewareConsumer } from "@nestjs/common";
import { UsersController } from "./Users.controller";
import { UsersService } from "./Users.service";
import { LoggerMiddleware } from "../Middlewares/logger.middleware";

@Module({
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes(UsersController);
    }
}