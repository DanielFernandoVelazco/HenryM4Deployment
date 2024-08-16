/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus, Put, Query, ParseUUIDPipe, HttpException, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IsUUID } from 'class-validator';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageUploadPipe } from 'src/pipes-validation/image/image-upload/image-upload.pipe';
import { AuthGuard } from 'src/guard/auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

//@ApiBearerAuth()
@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  @HttpCode(200)
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.productsService.findAll(page, limit);
  }

  @Post()
  @HttpCode(201)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productsService.findOne(id);
    if (!IsUUID(4, { each: true })) {
      throw new HttpException('Invalid UUID', HttpStatus.BAD_REQUEST);
    }
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  @Put(':id')
  @HttpCode(200)
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: Partial<UpdateProductDto>,
  ) {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    const updateProduct = await this.productsService.update(
      id,
      updateProductDto as UpdateProductDto,
    )
    return updateProduct;
  }

  @Delete(':id')
  @HttpCode(200)
  remove(@Param('id') id: string) {
    const product = this.productsService.findOne(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return this.productsService.remove(id);
  }

  @Post(':id/upload')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard)
  async uploadfile(
    @Param('id') id: string,
    @UploadedFile(new ImageUploadPipe()) file: Express.Multer.File,
  ) {
    return await this.productsService.uploadFile(file, id);
  }
}
