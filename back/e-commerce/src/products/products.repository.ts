/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import ProductEntity from "src/entities/product.entity";

@Injectable()
export class ProductsRepository {
    private products: ProductEntity[] = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Product 1 description',
            price: 10,
            stock: true,
            imgUrl: 'https://picsum.photos/200/300'
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Product 2 description',
            price: 20,
            stock: false,
            imgUrl: 'https://picsum.photos/200/300'
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Product 3 description',
            price: 30,
            stock: true,
            imgUrl: 'https://picsum.photos/200/300'
        }
    ]

    findAll() {
        return this.products
    }
}