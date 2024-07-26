/* eslint-disable prettier/prettier */
export class ProductResponseDto {
    name: string;
    description: string;
    price: number;
    stock: boolean;
    imgUrl: string;

    constructor(partial: Partial<ProductResponseDto>) {
        const { name, description, price, stock, imgUrl } = partial;

        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.imgUrl = imgUrl;
    }
}