import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { uploadFileDto } from 'src/file-upload/dto/update-file.dto';
import { FileUploadService } from 'src/file-upload/file-upload.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
    private readonly fileUploadService: FileUploadService,
  ) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productsRepository.create(createProductDto)
    return await this.productsRepository.save(newProduct)
  }

  async findAll(page: number, limit: number) {
    return await this.productsRepository.find({
      take: limit,
      skip: (page - 1) * limit
    })
  }

  async findOne(id: string): Promise<Product> {
    return await this.productsRepository.findOneBy({ id })
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    console.log('UpdateProductDto', updateProductDto);
    await this.productsRepository.update(id, updateProductDto)
    return this.productsRepository.findOneBy({ id })
  }

  async remove(id: string): Promise<{ id: string }> {
    await this.productsRepository.delete(id);
    return { id }
  }

  async buyProduct(id: string): Promise<Product> {
    const product = await this.productsRepository.findOneBy({ id })
    if (product.stock === 0) {
      throw new Error('Out of stock')
    }
    await this.productsRepository.update(id, {
      stock: product.stock - 1,
    })
    console.log('Product bought successfully');
    return this.productsRepository.findOneBy({ id })
  }

  async uploadFile(file: uploadFileDto, id: string) {
    const url = await this.fileUploadService.uploadFile({
      fieldname: file.fieldname,
      buffer: file.buffer,
      originalname: file.mimetype,
      mimetype: file.mimetype,
      size: file.size,
    })
    await this.productsRepository.update(id, { imgUrl: url });
    return { imgUrl: url }
  }
}