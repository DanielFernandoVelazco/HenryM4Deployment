/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsRepository {
    private products = []

    async getProducts() {
        return this.products
    }
}
