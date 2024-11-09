/*
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsRepository {
    private products: CreateProductDto[] = [
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

    create(createProduct: CreateProductDto) {
        const id = this.products.length + 1;
        const productAdd = { id, ...createProduct };
        this.products = [...this.products, productAdd];
        return productAdd;
    }

    findAll({ page, limit }: { page: number; limit: number; }) {
        return this.products.slice(page, limit);
    }

    findOne(id: number) {
        return this.products.find((product) => product.id === id)
    }

    update(id: number, updateProduct: CreateProductDto) {
        const product = this.findOne(id);
        const upProduct = { ...product, ...updateProduct };
        this.products = this.products.map((product) => (product.id === id ? upProduct : product));
        return upProduct;
    }

    remove(id: number) {
        this.products = this.products.filter((product) => product.id !== id);
        return id;
    }
}
*/