import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProduct: CreateProductDto): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imlUrl: string;
    };
    findAll(page?: number, limit?: number): CreateProductDto[];
    findOne(id: string): CreateProductDto;
    update(id: string, updateProductDto: UpdateProductDto): string;
    remove(id: string): string;
}
