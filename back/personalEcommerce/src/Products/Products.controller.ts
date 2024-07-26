/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { ProductsService } from "./Products.service";
import typeProductObject from "src/VariableTypes/productsObject";


@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    getProducts() {
        return this.productsService.getProducts();
    }

    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.productsService.getProductsById(Number(id));
    }

    @Post()
    createProduct(@Body() product: typeProductObject, @Req() req: any) {
        return this.productsService.createProduct(product);
    }

    @Put()
    updateProduct() {
        return 'Este es el metodo put de products';
    }

    @Delete()
    deleteProduct() {
        return 'Este es el metodo delete de products';
    }
}