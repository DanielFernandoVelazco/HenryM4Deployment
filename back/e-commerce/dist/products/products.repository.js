"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
let ProductsRepository = class ProductsRepository {
    constructor() {
        this.products = [
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
        ];
    }
    findAll() {
        return this.products;
    }
    create(createProduct) {
        const newUser = {
            id: this.products.length + 1,
            ...createProduct
        };
        this.products.push(newUser);
        return newUser.id;
    }
    findOneByName(name) {
        return this.products.find(product => product.name === name);
    }
    findOne(id) {
        return this.products.find(product => product.id === id);
    }
    remove(id) {
        this.products = this.products.filter(product => product.id !== id);
        return id;
    }
    update(id, updateProductDto) {
        const product = this.findOne(id);
        const updateProduct = {
            ...product,
            ...updateProductDto,
        };
        this.products = this.products.map(product => product.id === id ? updateProduct : product);
        return updateProduct;
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)()
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map