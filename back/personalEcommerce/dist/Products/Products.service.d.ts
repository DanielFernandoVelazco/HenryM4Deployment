import { ProductsRepository } from "./Products.repository";
import typeProductObject from "src/VariableTypes/productsObject";
export declare class ProductsService {
    private productsRepository;
    constructor(productsRepository: ProductsRepository);
    getProducts(): Promise<typeProductObject[]>;
    getProductsById(id: number): Promise<typeProductObject>;
    createProduct(product: Omit<typeProductObject, "id">): Promise<typeProductObject>;
}
