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
                price: 100,
                stock: true,
                imlUrl: 'https://placeimg.com/640/480/any',
            },
            {
                id: 2,
                name: 'Product2',
                price: 200,
                stock: false,
                imlUrl: 'https://placeimg.com/640/480/any',
            },
            {
                id: 3,
                name: 'Product3',
                price: 300,
                stock: true,
                imlUrl: 'https://placeimg.com/640/480/any',
            },
            {
                id: 4,
                name: 'Product4',
                price: 400,
                stock: true,
                imlUrl: 'https://placeimg.com/640/480/any',
            },
            {
                id: 5,
                name: 'Product5',
                price: 500,
                stock: false,
                imlUrl: 'https://placeimg.com/640/480/any',
            }
        ];
    }
    findAll() {
        return this.products;
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)()
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map