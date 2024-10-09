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
    findOne(id: number): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imlUrl: string;
    };
}
