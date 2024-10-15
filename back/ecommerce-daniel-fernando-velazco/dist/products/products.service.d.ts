import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: ProductsRepository);
    create(createProduct: CreateProductDto): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imlUrl: string;
    };
    findAll(): CreateProductDto[];
    findOne(id: number): CreateProductDto;
    update(id: number, updateProduct: UpdateProductDto): string;
    remove(id: number): string;
}
