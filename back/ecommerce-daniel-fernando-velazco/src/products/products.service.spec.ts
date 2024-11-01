import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { FileUploadService } from 'src/file-upload/file-upload.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

describe('ProductsService', () => {
  let service: ProductsService;
  let productsRepository: Repository<Product>;
  let fileUploadService: FileUploadService;

  const mockProductRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOneBy: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  const mockFileUploadService = {
    uploadFile: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: mockProductRepository,
        },
        {
          provide: FileUploadService,
          useValue: mockFileUploadService,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    productsRepository = module.get<Repository<Product>>(getRepositoryToken(Product));
    fileUploadService = module.get<FileUploadService>(FileUploadService);
  });

  afterEach(() => {
    jest.clearAllMocks(); // Limpia los mocks después de cada prueba
  });

  describe('create', () => {
    it('should create a product', async () => {
      const createProductDto: CreateProductDto = {
        id: '1',
        name: 'Test Product',
        description: 'Description of test product',
        price: 100,
        stock: 10,
        imgUrl: 'http://example.com/image.png',
      };

      const savedProduct = { ...createProductDto, id: '1' };

      mockProductRepository.create.mockReturnValue(savedProduct);
      mockProductRepository.save.mockResolvedValue(savedProduct);

      const result = await service.create(createProductDto);
      expect(result).toEqual(savedProduct);
      expect(mockProductRepository.create).toHaveBeenCalledWith(createProductDto);
      expect(mockProductRepository.save).toHaveBeenCalledWith(savedProduct);
    });
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const products = [{ id: '1', name: 'Product 1' }, { id: '2', name: 'Product 2' }];
      mockProductRepository.find.mockResolvedValue(products);

      const result = await service.findAll(1, 10);
      expect(result).toEqual(products);
      expect(mockProductRepository.find).toHaveBeenCalledWith({
        take: 10,
        skip: 0,
      });
    });
  });

  describe('findOne', () => {
    it('should return a product', async () => {
      const product = { id: '1', name: 'Product 1' };
      mockProductRepository.findOneBy.mockResolvedValue(product);

      const result = await service.findOne('1');
      expect(result).toEqual(product);
      expect(mockProductRepository.findOneBy).toHaveBeenCalledWith({ id: '1' });
    });
  });

  describe('update', () => {
    it('should update a product', async () => {
      const updateProductDto: UpdateProductDto = {
        name: 'Updated Product',
        description: 'Updated Description',
        price: 120,
        stock: 15,
        imgUrl: 'http://example.com/updated-image.png',
      };

      mockProductRepository.update.mockResolvedValue({});
      mockProductRepository.findOneBy.mockResolvedValue({ ...updateProductDto, id: '1' });

      const result = await service.update('1', updateProductDto);
      expect(result).toEqual({ ...updateProductDto, id: '1' });
      expect(mockProductRepository.update).toHaveBeenCalledWith('1', updateProductDto);
    });
  });

  describe('remove', () => {
    it('should remove a product', async () => {
      const id = '1';
      mockProductRepository.delete.mockResolvedValue({});

      const result = await service.remove(id);
      expect(result).toEqual({ id });
      expect(mockProductRepository.delete).toHaveBeenCalledWith(id);
    });
  });

  describe('buyProduct', () => {
    it('should buy a product and reduce its stock', async () => {
      const product = { id: '1', stock: 10 };
      mockProductRepository.findOneBy.mockResolvedValue(product);
      mockProductRepository.update.mockResolvedValue({});

      const result = await service.buyProduct('1');
      expect(result).toEqual(product);
      expect(mockProductRepository.update).toHaveBeenCalledWith('1', { stock: 9 });
    });

    it('should throw an error if the product is out of stock', async () => {
      const product = { id: '1', stock: 0 };
      mockProductRepository.findOneBy.mockResolvedValue(product);

      await expect(service.buyProduct('1')).rejects.toThrow('Out of stock');
    });
  });
});
