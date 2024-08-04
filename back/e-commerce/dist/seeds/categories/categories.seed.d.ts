import { Category } from "src/categories/entities/category.entity";
import { Repository } from "typeorm";
export declare class CategoriesSeed {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    seed(): Promise<void>;
}
