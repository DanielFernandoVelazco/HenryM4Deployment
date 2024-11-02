import { Order } from "src/orders/entities/order.entity";
import { Product } from "src/products/entities/product.entity";
export declare class OrdersDetail {
    id: string;
    price: number;
    order: Order;
    products: Product[];
}
