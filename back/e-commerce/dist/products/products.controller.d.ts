import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(page?: number, limit?: number): Promise<import("./entities/product.entity").Product[]>;
    create(createProductDto: CreateProductDto): Promise<import("./entities/product.entity").Product>;
    findOne(id: string): Promise<import("./entities/product.entity").Product>;
    update(id: string, updateProductDto: Partial<UpdateProductDto>): Promise<import("./entities/product.entity").Product>;
    remove(id: string): Promise<{
        id: string;
    }>;
}
