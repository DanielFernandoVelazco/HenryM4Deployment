/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./Products.repository";
import typeProductObject from "src/VariableTypes/productsObject";

@Injectable()
export class ProductsService {


    constructor(private productsRepository: ProductsRepository) { }
    getProducts() {
        return this.productsRepository.getProducts();
    }

    getProductsById(id: number) {
        return this.productsRepository.getProductsById(id);
    }

    createProduct(product: Omit<typeProductObject, "id">): Promise<typeProductObject> {
        return this.productsRepository.createProduct(product);
    }
}