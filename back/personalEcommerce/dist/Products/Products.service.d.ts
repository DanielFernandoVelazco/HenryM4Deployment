import { ProductsRepository } from "./Products.repository";
export declare class ProductsService {
    private productsRepository;
    constructor(productsRepository: ProductsRepository);
    getProducts(): Promise<import("../VariableTypes/productsObject").default[]>;
}
