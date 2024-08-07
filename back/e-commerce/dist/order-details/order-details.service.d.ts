import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrdersDetail } from './entities/order-detail.entity';
import { Repository } from 'typeorm';
export declare class OrderDetailsService {
    private readonly orderDetailRepository;
    constructor(orderDetailRepository: Repository<OrdersDetail>);
    create(createOrderDetailDto: CreateOrderDetailDto): Promise<CreateOrderDetailDto & OrdersDetail>;
    findOneByOrderId(orderId: string, relations?: string[]): Promise<OrdersDetail[]>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOrderDetailDto: UpdateOrderDetailDto): string;
    remove(id: string): string;
}
