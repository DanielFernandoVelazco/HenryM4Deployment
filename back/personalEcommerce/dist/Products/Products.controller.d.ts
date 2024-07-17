import { ProductsService } from "./Products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<import("../VariableTypes/productsObject").default[]>;
}
