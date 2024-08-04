"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailsService = void 0;
const common_1 = require("@nestjs/common");
let OrderDetailsService = class OrderDetailsService {
    create(createOrderDetailDto) {
        return 'This action adds a new orderDetail';
    }
    findAll() {
        return `This action returns all orderDetails`;
    }
    findOne(id) {
        return `This action returns a #${id} orderDetail`;
    }
    update(id, updateOrderDetailDto) {
        return `This action updates a #${id} orderDetail`;
    }
    remove(id) {
        return `This action removes a #${id} orderDetail`;
    }
};
exports.OrderDetailsService = OrderDetailsService;
exports.OrderDetailsService = OrderDetailsService = __decorate([
    (0, common_1.Injectable)()
], OrderDetailsService);
//# sourceMappingURL=order-details.service.js.map