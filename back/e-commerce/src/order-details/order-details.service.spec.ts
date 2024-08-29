/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { OrderDetailsService } from './order-details.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { OrdersDetail } from './entities/order-detail.entity';
import { Repository } from 'typeorm';

describe('OrderDetailsService', () => {
  let service: OrderDetailsService;
  let repository: Repository<OrdersDetail>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderDetailsService,
        {
          provide: getRepositoryToken(OrdersDetail),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<OrderDetailsService>(OrderDetailsService);
    repository = module.get<Repository<OrdersDetail>>(getRepositoryToken(OrdersDetail));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
