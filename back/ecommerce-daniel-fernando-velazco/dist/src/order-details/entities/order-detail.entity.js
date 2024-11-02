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
exports.OrdersDetail = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const order_entity_1 = require("../../orders/entities/order.entity");
const product_entity_1 = require("../../products/entities/product.entity");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let OrdersDetail = class OrdersDetail {
    constructor() {
        this.id = (0, uuid_1.v4)();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, default: (0, uuid_1.v4)() }, price: { required: true, type: () => Number }, order: { required: true, type: () => require("../../orders/entities/order.entity").Order }, products: { required: true, type: () => [require("../../products/entities/product.entity").Product] } };
    }
};
exports.OrdersDetail = OrdersDetail;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The id of the order detail, asigned by the database',
        required: true
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OrdersDetail.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The price of the order detail',
        required: true
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrdersDetail.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => order_entity_1.Order, order => order.ordersDetail),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", order_entity_1.Order)
], OrdersDetail.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => product_entity_1.Product, product => product.orderDetails),
    __metadata("design:type", Array)
], OrdersDetail.prototype, "products", void 0);
exports.OrdersDetail = OrdersDetail = __decorate([
    (0, typeorm_1.Entity)()
], OrdersDetail);
//# sourceMappingURL=order-detail.entity.js.map