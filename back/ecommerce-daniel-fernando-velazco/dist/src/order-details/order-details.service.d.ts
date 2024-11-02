import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrdersDetail } from './entities/order-detail.entity';
import { Repository } from 'typeorm';
export declare class OrderDetailsService {
    private readonly orderDetailRepository;
    constructor(orderDetailRepository: Repository<OrdersDetail>);
    create(createOrderDetailDto: CreateOrderDetailDto): Promise<CreateOrderDetailDto & OrdersDetail>;
    findAll(): Promise<string>;
    findOneByOrderId(orderId: string, relations?: string[]): Promise<OrdersDetail[]>;
    findOne(id: string): Promise<string>;
    update(id: string, updateOrderDetailDto: UpdateOrderDetailDto): Promise<string>;
    remove(id: string): Promise<string>;
}
