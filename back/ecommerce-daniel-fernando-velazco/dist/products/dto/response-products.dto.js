"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsResponseDto = void 0;
class ProductsResponseDto {
    constructor(partial) {
        const { id, name, description, price, stock, imlUrl } = partial;
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.imlUrl = imlUrl;
    }
}
exports.ProductsResponseDto = ProductsResponseDto;
//# sourceMappingURL=response-products.dto.js.map