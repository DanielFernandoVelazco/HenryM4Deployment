import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
export declare class OrderDetailsController {
    private readonly orderDetailsService;
    constructor(orderDetailsService: OrderDetailsService);
    create(createOrderDetailDto: CreateOrderDetailDto): Promise<CreateOrderDetailDto & import("./entities/order-detail.entity").OrdersDetail>;
    findAll(): Promise<string>;
    findOne(id: string): Promise<string>;
    update(id: string, updateOrderDetailDto: UpdateOrderDetailDto): Promise<string>;
    remove(id: string): Promise<string>;
}
