export declare class ProductsResponseDto {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: boolean;
    imlUrl: string;
    constructor(partial: Partial<ProductsResponseDto>);
}
