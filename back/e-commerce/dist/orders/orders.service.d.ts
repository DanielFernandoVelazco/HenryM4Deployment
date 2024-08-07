import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { ProductsService } from 'src/products/products.service';
import { OrderDetailsService } from 'src/order-details/order-details.service';
import { OrderResponseDto } from './dto/response-order.dto';
export declare class OrdersService {
    private readonly orderRepository;
    private readonly usersService;
    private readonly productsService;
    private readonly ordderDetailsService;
    constructor(orderRepository: Repository<Order>, usersService: UsersService, productsService: ProductsService, ordderDetailsService: OrderDetailsService);
    create(createOrderDto: CreateOrderDto): Promise<OrderResponseDto>;
    private calculateTotal;
    findAll(): string;
    findOne(id: string): Promise<import("../order-details/entities/order-detail.entity").OrdersDetail[]>;
    update(id: string, updateOrderDto: UpdateOrderDto): string;
    remove(id: string): string;
}
