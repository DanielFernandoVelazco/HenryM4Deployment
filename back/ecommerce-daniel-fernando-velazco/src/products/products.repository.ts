import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRepository {
    private products = [
        {
            id: 1,
            name: 'Product1',
            description: 'Description1',
            price: 100,
            stock: true,
            imlUrl: 'https://placeimg.com/640/480/any',
        },
        {
            id: 2,
            name: 'Product2',
            description: 'Description2',
            price: 200,
            stock: false,
            imlUrl: 'https://placeimg.com/640/480/any',
        },
        {
            id: 3,
            name: 'Product3',
            description: 'Description3',
            price: 300,
            stock: true,
            imlUrl: 'https://placeimg.com/640/480/any',
        },
        {
            id: 4,
            name: 'Product4',
            description: 'Description4',
            price: 400,
            stock: true,
            imlUrl: 'https://placeimg.com/640/480/any',
        },
        {
            id: 5,
            name: 'Product5',
            description: 'Description5',
            price: 500,
            stock: false,
            imlUrl: 'https://placeimg.com/640/480/any',
        }
    ]

    findAll() {
        return this.products;
    }

    findOne(id: number){
        return this.products.find((product) => product.id === id)
    }
}
