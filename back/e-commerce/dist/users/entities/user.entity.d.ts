import { Order } from "src/orders/entities/order.entity";
export declare enum Role {
    User = "user",
    Admin = "admin"
}
export declare class User {
    id: string;
    name: string;
    password: string;
    email: string;
    address: string;
    phone: string;
    coutry: string;
    city: string;
    orders: Order[];
    administrator: string;
}
