export declare class ProductsRepository {
    private products;
    findAll(): {
        id: number;
        name: string;
        price: number;
        stock: boolean;
        imlUrl: string;
    }[];
}
