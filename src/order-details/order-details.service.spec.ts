import { Test, TestingModule } from '@nestjs/testing';
import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

const mockOrderDetailRepository = {
  save: jest.fn((dto: CreateOrderDetailDto) => Promise.resolve({ id: '1', ...dto })),
  find: jest.fn((options) => Promise.resolve([{ id: '1', ...options.where }]))
};

describe('OrderDetailsService', () => {
  let service: OrderDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderDetailsService,
        {
          provide: 'OrdersDetailRepository',
          useValue: mockOrderDetailRepository,
        },
      ],
    }).compile();

    service = module.get<OrderDetailsService>(OrderDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new order detail', async () => {
    const dto: CreateOrderDetailDto = {
      price: 100,
      order: { id: 'order1' },
      products: [{ id: 'product1' }, { id: 'product2' }],
    };

    const result = await service.create(dto);
    expect(result).toEqual({ id: '1', ...dto });
    expect(mockOrderDetailRepository.save).toHaveBeenCalledWith(dto);
  });

  it('should find all order details', async () => {
    const result = await service.findAll();
    expect(result).toEqual('This action returns all orderDetails');
  });

  it('should find one order detail by id', async () => {
    const result = await service.findOne('1');
    expect(result).toEqual('This action returns a #1 orderDetail');
  });

  it('should update an order detail', async () => {
    const dto: UpdateOrderDetailDto = {
      price: 120,
      order: { id: 'order2' },
      products: [{ id: 'product3' }],
    };

    const result = await service.update('1', dto);
    expect(result).toEqual('This action updates a #1 orderDetail');
  });

  it('should remove an order detail', async () => {
    const result = await service.remove('1');
    expect(result).toEqual('This action removes a #1 orderDetail');
  });
});
