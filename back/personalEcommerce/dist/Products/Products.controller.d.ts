import { ProductsService } from "./Products.service";
import typeProductObject from "src/VariableTypes/productsObject";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<typeProductObject[]>;
    getProductById(id: string): Promise<typeProductObject>;
    createProduct(product: typeProductObject, req: any): Promise<typeProductObject>;
    updateProduct(): string;
    deleteProduct(): string;
}
