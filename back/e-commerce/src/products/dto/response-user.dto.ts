/* eslint-disable prettier/prettier */
export class ProductResponseDto {
    name: string;
    description: string;
    price: number;
    stock: number;
    product: string;
    imgUrl: string;

    constructor(partial: Partial<ProductResponseDto>) {
        const { name, description, price, stock, product, imgUrl } = partial;

        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.product = product;
        this.imgUrl = imgUrl;
    }
}