import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsRepository {
    private products;
    create(createProduct: CreateProductDto): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imlUrl: string;
    };
    findAll({ page, limit }: {
        page: number;
        limit: number;
    }): CreateProductDto[];
    findOne(id: number): CreateProductDto;
    update(id: number, updateProduct: CreateProductDto): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imlUrl: string;
    };
    remove(id: number): number;
}
