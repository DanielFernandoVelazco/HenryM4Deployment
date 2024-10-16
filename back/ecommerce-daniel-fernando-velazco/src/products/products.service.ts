import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductsRepository) { }

  create(createProduct: CreateProductDto) {
    return this.productRepository.create(createProduct);
  }

  findAll({ page, limit }: { page: number; limit: number; }) {
    return this.productRepository.findAll({ page, limit });

  }

  findOne(id: number) {
    return this.productRepository.findOne(id);
  }

  update(id: number, updateProduct: UpdateProductDto) {
    this.productRepository.update(id, updateProduct);
    return `This action updates a #${+id} product`;
  }

  remove(id: number) {
    this.productRepository.remove(id);
    return `This action removes a #${+id} product`;
  }
}
