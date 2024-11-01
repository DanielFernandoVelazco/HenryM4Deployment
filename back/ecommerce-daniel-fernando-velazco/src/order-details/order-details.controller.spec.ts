import { Test, TestingModule } from '@nestjs/testing';
import { OrderDetailsController } from './order-details.controller';
import { OrderDetailsService } from './order-details.service';

describe('OrderDetailsController', () => {
  let controller: OrderDetailsController;
  let service: OrderDetailsService;

  const mockOrderDetailsService = {
    findAll: jest.fn(() => Promise.resolve([])),
    findOne: jest.fn((id) => Promise.resolve({ id, name: 'Sample Order Detail' })),
    create: jest.fn((dto) => Promise.resolve({ id: '1', ...dto })),
    update: jest.fn((id, dto) => Promise.resolve({ id, ...dto })),
    remove: jest.fn((id) => Promise.resolve({ id })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderDetailsController],
      providers: [
        {
          provide: OrderDetailsService,
          useValue: mockOrderDetailsService,
        },
      ],
    }).compile();

    controller = module.get<OrderDetailsController>(OrderDetailsController);
    service = module.get<OrderDetailsService>(OrderDetailsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call findAll and return an array', async () => {
    await expect(controller.findAll()).resolves.toEqual([]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should call findOne with id and return a single order detail', async () => {
    const result = await controller.findOne('1');
    expect(result).toEqual({ id: '1', name: 'Sample Order Detail' });
    expect(service.findOne).toHaveBeenCalledWith('1');
  });
});
