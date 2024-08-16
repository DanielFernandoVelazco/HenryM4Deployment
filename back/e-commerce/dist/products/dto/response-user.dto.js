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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class ProductResponseDto {
    constructor(partial) {
        const { name, description, price, stock, product, imgUrl } = partial;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.product = product;
        this.imgUrl = imgUrl;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description: { required: true, type: () => String }, price: { required: true, type: () => Number }, stock: { required: true, type: () => Number }, product: { required: true, type: () => String }, imgUrl: { required: true, type: () => String } };
    }
}
exports.ProductResponseDto = ProductResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Name of the product',
        required: true
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Description of the product',
        required: true
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Price of the product',
        required: true
    }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Stock of the product',
        required: true
    }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Type product of the products',
        required: true
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "product", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'ImgUrl of the product',
        required: true
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "imgUrl", void 0);
//# sourceMappingURL=response-user.dto.js.map