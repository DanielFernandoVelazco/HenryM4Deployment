"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResponseDto = void 0;
class ProductResponseDto {
    constructor(partial) {
        const { name, description, price, stock, imgUrl } = partial;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.imgUrl = imgUrl;
    }
}
exports.ProductResponseDto = ProductResponseDto;
//# sourceMappingURL=response-user.dto.js.map