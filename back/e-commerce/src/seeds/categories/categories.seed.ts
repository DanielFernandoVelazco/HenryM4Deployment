/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/categories/entities/category.entity";
import { In, Repository } from "typeorm";
import { categories } from "./categories.mock";

@Injectable()
export class CategoriesSeed {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) { }

    async seed() {
        const existCategories = await this.categoryRepository.find({
            where: { name: In(categories) },
        });

        for (const categoryName of categories) {
            if (!existCategories.some((category) => category.name === categoryName)) {
                const category = new Category();
                category.name = categoryName;
                await this.categoryRepository.save(category);
            }
        }
    }
}