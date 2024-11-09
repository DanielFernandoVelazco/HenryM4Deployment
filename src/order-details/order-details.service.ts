import { Injectable } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersDetail } from './entities/order-detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderDetailsService {

  constructor(
    @InjectRepository(OrdersDetail)
    private readonly orderDetailRepository: Repository<OrdersDetail>,
  ) { }

  async create(createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailRepository.save(createOrderDetailDto)
  }

  async findAll() {
    return `This action returns all orderDetails`;
  }

  async findOneByOrderId(
    orderId: string,
    relations: string[] = [],
  ): Promise<OrdersDetail[]> {
    return await this.orderDetailRepository.find({
      where: { order: { id: orderId } },
      relations: relations,
    })
  }

  async findOne(id: string) {
    return `This action returns a #${id} orderDetail`;
  }

  async update(id: string, updateOrderDetailDto: UpdateOrderDetailDto) {
    return `This action updates a #${id} orderDetail`;
  }

  async remove(id: string) {
    return `This action removes a #${id} orderDetail`;
  }
}