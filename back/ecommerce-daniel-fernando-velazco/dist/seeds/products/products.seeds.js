"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSeed = void 0;
const product_entity_1 = require("../../products/entities/product.entity");
const products_mock_1 = require("../products/products-mock");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("../../categories/entities/category.entity");
let ProductsSeed = class ProductsSeed {
    constructor(productRepository, categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }
    async findCategoryByName(category) {
        const foundCategory = await this.categoryRepository.findOne({
            where: { name: category },
        });
        if (!foundCategory) {
            throw new Error(`Category ${category} not found`);
        }
        return foundCategory;
    }
    async seed() {
        const existingProductNames = (await this.productRepository.find()).map((product) => product.name);
        for (const productData of products_mock_1.productsMock) {
            if (!existingProductNames.includes(productData.name)) {
                const category = await this.findCategoryByName(productData.category);
                const product = new product_entity_1.Product();
                product.name = productData.name;
                product.description = productData.description;
                product.price = productData.price;
                product.stock = productData.stock;
                product.category = category;
                await this.productRepository.save(product);
            }
        }
    }
};
exports.ProductsSeed = ProductsSeed;
exports.ProductsSeed = ProductsSeed = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsSeed);
//# sourceMappingURL=products.seeds.js.map