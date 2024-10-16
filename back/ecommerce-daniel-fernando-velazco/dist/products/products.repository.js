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
        ];
    }
    create(createProduct) {
        const id = this.products.length + 1;
        const productAdd = { id, ...createProduct };
        this.products = [...this.products, productAdd];
        return productAdd;
    }
    findAll({ page, limit }) {
        return this.products.slice(page, limit);
    }
    findOne(id) {
        return this.products.find((product) => product.id === id);
    }
    update(id, updateProduct) {
        const product = this.findOne(id);
        const upProduct = { ...product, ...updateProduct };
        this.products = this.products.map((product) => (product.id === id ? upProduct : product));
        return upProduct;
    }
    remove(id) {
        this.products = this.products.filter((product) => product.id !== id);
        return id;
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)()
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map