import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { UsersService } from 'src/users/users.service';
import { ProductsService } from 'src/products/products.service';
import { OrderDetailsService } from 'src/order-details/order-details.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderResponseDto } from './dto/response-order.dto';

describe('OrdersService', () => {
  let ordersService: OrdersService;
  let usersService: UsersService;
  let productsService: ProductsService;
  let orderDetailsService: OrderDetailsService;

  const mockOrderRepository = {
    save: jest.fn(),
    create: jest.fn(),
    findOneBy: jest.fn(),
  };

  const mockUsersService = {
    findOne: jest.fn(),
  };

  const mockProductsService = {
    buyProduct: jest.fn(),
  };

  const mockOrderDetailsService = {
    create: jest.fn(),
    findOneByOrderId: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: getRepositoryToken(Order),
          useValue: mockOrderRepository,
        },
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
        {
          provide: ProductsService,
          useValue: mockProductsService,
        },
        {
          provide: OrderDetailsService,
          useValue: mockOrderDetailsService,
        },
      ],
    }).compile();

    ordersService = module.get<OrdersService>(OrdersService);
    usersService = module.get<UsersService>(UsersService);
    productsService = module.get<ProductsService>(ProductsService);
    orderDetailsService = module.get<OrderDetailsService>(OrderDetailsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create an order and return the order response', async () => {
      const createOrderDto: CreateOrderDto = {
        userId: 'user-uuid',
        products: [{ id: 'product-uuid' }],
      };

      const user = { id: 'user-uuid', name: 'Test User' };
      const orderEntity = { id: 'order-uuid', user, date: new Date() };

      const orderDetailEntity = {
        id: 'order-detail-uuid',
        price: 100,
        products: createOrderDto.products,
        order: orderEntity
      };

      mockUsersService.findOne.mockResolvedValue(user);
      mockOrderRepository.create.mockReturnValue(orderEntity);
      mockOrderRepository.save.mockResolvedValue(orderEntity);
      mockProductsService.buyProduct.mockResolvedValue({ price: 100 });
      mockOrderDetailsService.create.mockResolvedValue(orderDetailEntity);

      const result = await ordersService.create(createOrderDto);
      expect(result).toBeInstanceOf(OrderResponseDto);
      expect(mockUsersService.findOne).toHaveBeenCalledWith(createOrderDto.userId);
      expect(mockOrderRepository.save).toHaveBeenCalledWith(orderEntity);
      expect(mockOrderDetailsService.create).toHaveBeenCalled();
    });

  });

  describe('findAll', () => {
    it('should return a message indicating all orders', async () => {
      const result = await ordersService.findAll();
      expect(result).toEqual('This action returns all orders');
    });
  });

  describe('findOne', () => {
    it('should return an order detail by id', async () => {
      const orderId = 'order-uuid';
      const orderDetail = { id: orderId, products: [], order: {} };

      mockOrderRepository.findOneBy.mockResolvedValue({ id: orderId });
      mockOrderDetailsService.findOneByOrderId.mockResolvedValue(orderDetail);

      const result = await ordersService.findOne(orderId);
      expect(result).toEqual(orderDetail);
      expect(mockOrderRepository.findOneBy).toHaveBeenCalledWith({ id: orderId });
      expect(mockOrderDetailsService.findOneByOrderId).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should update an order and return a message', async () => {
      const orderId = 'order-uuid';
      const updateOrderDto: UpdateOrderDto = {};
      const result = await ordersService.update(orderId, updateOrderDto);
      expect(result).toEqual(`This action updates a #${orderId} order`);
    });
  });

  describe('remove', () => {
    it('should remove an order and return a message', async () => {
      const orderId = 'order-uuid';
      const result = await ordersService.remove(orderId);
      expect(result).toEqual(`This action removes a #${orderId} order`);
    });
  });
});
