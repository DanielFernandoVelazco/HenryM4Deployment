/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductsRepository {
    private products = [
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

    create(createProduct: CreateProductDto) {
        const newUser = {
            id: this.products.length + 1,
            ...createProduct
        }
        this.products.push(newUser)
        return newUser.id
    }

    findOneByName(name: string) {
        return this.products.find(product => product.name === name)
    }

    findOne(id: number) {
        return this.products.find(product => product.id === id)
    }

    remove(id: number) {
        this.products = this.products.filter(product => product.id !== id)
        return id
    }

    update(id: number, updateProductDto: UpdateProductDto) {
        const product = this.findOne(id)
        const updateProduct = {
            ...product,
            ...updateProductDto,
        }
        this.products = this.products.map(product => product.id === id ? updateProduct : product)
        return updateProduct
    }




}