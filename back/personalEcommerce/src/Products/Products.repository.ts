/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import typeProductObject from "../VariableTypes/productsObject";

@Injectable()
export class ProductsRepository {

    private products: typeProductObject[] = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Description 1',
            price: 10,
            stock: true,
            imgUrl: 'imgUrl 1'
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description 2',
            price: 20,
            stock: false,
            imgUrl: 'imgUrl 2'
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Description 3',
            price: 30,
            stock: true,
            imgUrl: 'imgUrl 3'
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'Description 4',
            price: 40,
            stock: false,
            imgUrl: 'imgUrl 4'
        }
    ]

    async getProducts() {
        return this.products
    }

    async getProductsById(id: number) {
        return this.products.find(product => product.id === id)
    }

    async createProduct(product: Omit<typeProductObject, "id">) {
        const id = this.products.length + 1;
        this.products = [... this.products, { id, ...product }];
        return { id, ...product };
    }
}
