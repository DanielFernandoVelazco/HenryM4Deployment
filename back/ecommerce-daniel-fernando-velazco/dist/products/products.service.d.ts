import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: ProductsRepository);
    create(createProductDto: CreateProductDto): string;
    findAll(): {
        id: number;
        name: string;
        price: number;
        stock: boolean;
        imlUrl: string;
    }[];
    findOne(id: number): string;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}
