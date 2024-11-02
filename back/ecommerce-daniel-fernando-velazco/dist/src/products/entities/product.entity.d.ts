import { Category } from 'src/categories/entities/category.entity';
import { OrdersDetail } from 'src/order-details/entities/order-detail.entity';
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    category: Category;
    orderDetails: OrdersDetail[];
}
