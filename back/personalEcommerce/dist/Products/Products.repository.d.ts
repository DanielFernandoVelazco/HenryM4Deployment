import typeProductObject from "../VariableTypes/productsObject";
export declare class ProductsRepository {
    private products;
    getProducts(): Promise<typeProductObject[]>;
    getProductsById(id: number): Promise<typeProductObject>;
    createProduct(product: Omit<typeProductObject, "id">): Promise<{
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
        id: number;
    }>;
}
