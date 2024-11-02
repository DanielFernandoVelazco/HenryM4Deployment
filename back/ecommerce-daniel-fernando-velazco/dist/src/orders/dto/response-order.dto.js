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
exports.OrderResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class OrderResponseDto {
    constructor(orderDetail) {
        this.id = orderDetail.id;
        this.price = orderDetail.price;
        this.products = orderDetail.products;
        this.order = {
            id: orderDetail.order.id,
            date: orderDetail.order.date,
            user: {
                id: orderDetail.order.user.id,
            },
        };
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, price: { required: true, type: () => Number }, products: { required: true, type: () => [Object] }, order: { required: true, type: () => ({ id: { required: true, type: () => String }, date: { required: true, type: () => Date }, user: { required: true, type: () => ({ id: { required: true, type: () => String } }) } }) } };
    }
}
exports.OrderResponseDto = OrderResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The id of the order, asigned by the database',
        required: true
    }),
    __metadata("design:type", String)
], OrderResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The price of the order',
        required: true
    }),
    __metadata("design:type", Number)
], OrderResponseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Array,
        description: 'The products of the order',
        required: true
    }),
    __metadata("design:type", Array)
], OrderResponseDto.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Object,
        description: 'The order of the order',
        required: true
    }),
    __metadata("design:type", Object)
], OrderResponseDto.prototype, "order", void 0);
//# sourceMappingURL=response-order.dto.js.map