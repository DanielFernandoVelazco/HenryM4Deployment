import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

describe('OrdersController', () => {
  let ordersController: OrdersController;
  let ordersService: OrdersService;

  const mockOrdersService = {
    create: jest.fn((dto: CreateOrderDto) => ({
      id: 'some-uuid',
      ...dto,
    })),
    findAll: jest.fn(() => [
      {
        id: 'some-uuid',
        userId: 'user-uuid',
        products: [{ id: 'product-uuid' }],
      },
    ]),
    findOne: jest.fn((id: string) => ({
      id,
      userId: 'user-uuid',
      products: [{ id: 'product-uuid' }],
    })),
    update: jest.fn((id: string, dto: UpdateOrderDto) => ({
      id,
      ...dto,
    })),
    remove: jest.fn((id: string) => ({
      id,
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [
        {
          provide: OrdersService,
          useValue: mockOrdersService,
        },
      ],
    }).compile();

    ordersController = module.get<OrdersController>(OrdersController);
    ordersService = module.get<OrdersService>(OrdersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create an order', async () => {
      const createOrderDto: CreateOrderDto = {
        userId: 'user-uuid',
        products: [{ id: 'product-uuid' }],
      };
      const result = await ordersController.create(createOrderDto);
      expect(result).toEqual({ id: expect.any(String), ...createOrderDto });
      expect(ordersService.create).toHaveBeenCalledWith(createOrderDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of orders', async () => {
      const result = await ordersController.findAll();
      expect(result).toEqual([
        {
          id: expect.any(String),
          userId: 'user-uuid',
          products: [{ id: 'product-uuid' }],
        },
      ]);
      expect(ordersService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single order', async () => {
      const id = 'some-uuid';
      const result = await ordersController.findOne(id);
      expect(result).toEqual({
        id,
        userId: 'user-uuid',
        products: [{ id: 'product-uuid' }],
      });
      expect(ordersService.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('update', () => {
    it('should update an order', async () => {
      const id = 'some-uuid';
      const updateOrderDto: UpdateOrderDto = {
        products: [{ id: 'updated-product-uuid' }],
      };
      const result = await ordersController.update(id, updateOrderDto);
      expect(result).toEqual({ id, ...updateOrderDto });
      expect(ordersService.update).toHaveBeenCalledWith(id, updateOrderDto);
    });
  });

  describe('remove', () => {
    it('should remove an order', async () => {
      const id = 'some-uuid';
      const result = await ordersController.remove(id);
      expect(result).toEqual({ id });
      expect(ordersService.remove).toHaveBeenCalledWith(id);
    });
  });
});
