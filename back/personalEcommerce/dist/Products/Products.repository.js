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
        ];
    }
    async getProducts() {
        return this.products;
    }
    async getProductsById(id) {
        return this.products.find(product => product.id === id);
    }
    async createProduct(product) {
        const id = this.products.length + 1;
        this.products = [...this.products, { id, ...product }];
        return { id, ...product };
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)()
], ProductsRepository);
//# sourceMappingURL=Products.repository.js.map