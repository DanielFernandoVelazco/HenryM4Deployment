import { OrdersDetail } from "src/order-details/entities/order-detail.entity";
import { User } from "src/users/entities/user.entity";
export declare class Order {
    id: string;
    user: User;
    date: Date;
    ordersDetail: OrdersDetail;
}
