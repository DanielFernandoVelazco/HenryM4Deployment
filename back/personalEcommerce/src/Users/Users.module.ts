/* eslint-disable prettier/prettier */
import { Module, MiddlewareConsumer } from "@nestjs/common";
import { UsersController } from "./Users.controller";
import { UsersService } from "./Users.service";
//import { LoggerMiddleware } from "../Middlewares/logger.middleware";
import { UsersRepository } from "./Users.repository";

@Module({
    providers: [UsersService, UsersRepository],
    controllers: [UsersController],
})
export class UsersModule {
    configure(consumer: MiddlewareConsumer) {
        //consumer.apply(LoggerMiddleware).forRoutes(UsersController);
    }
}