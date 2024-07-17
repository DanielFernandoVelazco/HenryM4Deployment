import typeProductObject from "../VariableTypes/productsObject";
export declare class ProductsRepository {
    private products;
    getProducts(): Promise<typeProductObject[]>;
}
