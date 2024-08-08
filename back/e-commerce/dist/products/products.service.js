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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_entity_1 = require("./entities/product.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const file_upload_service_1 = require("../file-upload/file-upload.service");
let ProductsService = class ProductsService {
    constructor(productsRepository, fileUploadService) {
        this.productsRepository = productsRepository;
        this.fileUploadService = fileUploadService;
    }
    async create(createProductDto) {
        const newProduct = this.productsRepository.create(createProductDto);
        return await this.productsRepository.save(newProduct);
    }
    async findAll(page, limit) {
        return await this.productsRepository.find({
            take: limit,
            skip: (page - 1) * limit
        });
    }
    async findOne(id) {
        return await this.productsRepository.findOneBy({ id });
    }
    async update(id, updateProductDto) {
        console.log('UpdateProductDto', updateProductDto);
        await this.productsRepository.update(id, updateProductDto);
        return this.productsRepository.findOneBy({ id });
    }
    async remove(id) {
        await this.productsRepository.delete(id);
        return { id };
    }
    async buyProduct(id) {
        const product = await this.productsRepository.findOneBy({ id });
        if (product.stock <= 0) {
            throw new Error('Out of stock');
        }
        await this.productsRepository.update(id, {
            stock: product.stock - 1,
        });
        console.log('Product bought successfully');
        return this.productsRepository.findOneBy({ id });
    }
    async uploadFile(file, id) {
        const url = await this.fileUploadService.uploadfile({
            fieldname: file.fieldname,
            buffer: file.buffer,
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
        });
        await this.productsRepository.update(id, { imgUrl: url });
        return { imgUrl: url };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        file_upload_service_1.FileUploadService])
], ProductsService);
//# sourceMappingURL=products.service.js.map