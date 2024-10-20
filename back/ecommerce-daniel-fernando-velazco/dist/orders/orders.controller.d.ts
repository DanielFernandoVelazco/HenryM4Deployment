import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<import("./dto/response-order.dto").OrderResponseDto>;
    findAll(): Promise<string>;
    findOne(id: string): Promise<import("../order-details/entities/order-detail.entity").OrdersDetail[]>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<string>;
    remove(id: string): Promise<string>;
}
