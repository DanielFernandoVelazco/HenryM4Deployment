/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module } from "@nestjs/common";
import { ProductsController } from "./Products.controller";
import { ProductsService } from "./Products.service";
//import { LoggerMiddleware } from "../Middlewares/logger.middleware";
import { ProductsRepository } from "./Products.repository";

@Module({
    providers: [ProductsService, ProductsRepository],
    controllers: [ProductsController],
})

export class ProductsModule {
    configure(consumer: MiddlewareConsumer) {
        //consumer.apply(LoggerMiddleware).forRoutes('products');
    }
}