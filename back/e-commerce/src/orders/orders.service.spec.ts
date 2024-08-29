/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { UsersService } from '../users/users.service';
import { ProductsService } from '../products/products.service';
import { OrderDetailsService } from '../order-details/order-details.service';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const mockOrderRepository = {
      find: jest.fn(),
      findOne: jest.fn(),

    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        { provide: getRepositoryToken(Order), useValue: mockOrderRepository },
        { provide: UsersService, useValue: {} },
        { provide: ProductsService, useValue: {} },
        { provide: OrderDetailsService, useValue: {} },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
