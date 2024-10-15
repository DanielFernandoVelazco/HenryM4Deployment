export class ProductsResponseDto {

    id: number;
    name: string;
    description: string;
    price: number;
    stock: boolean;
    imlUrl: string;

    constructor(partial: Partial<ProductsResponseDto>) {
        
        const {id, name, description, price, stock, imlUrl} = partial;

        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.imlUrl = imlUrl;
    }
}