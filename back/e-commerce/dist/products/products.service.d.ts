import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { UploadFileDto } from 'src/file-upload/dto/update-file-upload.dto';
import { FileUploadService } from 'src/file-upload/file-upload.service';
export declare class ProductsService {
    private readonly productsRepository;
    private readonly fileUploadService;
    constructor(productsRepository: Repository<Product>, fileUploadService: FileUploadService);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(page: number, limit: number): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: string): Promise<{
        id: string;
    }>;
    buyProduct(id: string): Promise<Product>;
    uploadFile(file: UploadFileDto, id: string): Promise<{
        imgUrl: string;
    }>;
}
