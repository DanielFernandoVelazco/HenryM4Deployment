import { Product } from "src/products/entities/product.entity";
import { productsMock } from "../products/products-mock";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "src/categories/entities/category.entity";

@Injectable()
export class ProductsSeed {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) { }

    async findCategoryByName(category: string): Promise<Category> {
        const foundCategory = await this.categoryRepository.findOne({
            where: { name: category },
        });
        if (!foundCategory) {
            throw new Error(`Category ${category} not found`);
        }
        return foundCategory;
    }

    async seed() {
        const existingProductNames = (await this.productRepository.find()).map(
            (product) => product.name,
        )

        for (const productData of productsMock) {
            if (!existingProductNames.includes(productData.name)) {
                const category = await this.findCategoryByName(productData.category);
                const product = new Product();
                product.name = productData.name;
                product.description = productData.description;
                product.price = productData.price;
                product.stock = productData.stock;
                product.category = category;
                await this.productRepository.save(product);
            }
        }
    }
}