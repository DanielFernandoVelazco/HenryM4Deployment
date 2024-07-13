/* eslint-disable prettier/prettier */
import { Controller } from "@nestjs/common";
import { ProductsService } from "./Products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    getProducts() {
        return this.productsService.getProducts();
    }
}