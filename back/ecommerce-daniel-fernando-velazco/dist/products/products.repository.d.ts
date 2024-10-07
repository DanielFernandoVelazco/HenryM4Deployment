export declare class ProductsRepository {
    private products;
    findAll(): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imlUrl: string;
    }[];
}
