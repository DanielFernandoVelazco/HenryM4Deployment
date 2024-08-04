/* eslint-disable prettier/prettier */
import { Order } from "src/orders/entities/order.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity()
export class OrdersDetail {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @Column()
    price: number;

    @OneToOne(() => Order, order => order.ordersDetail)
    @JoinColumn()
    order: Order;

    @ManyToMany(() => Product, product => product.orderDetails)
    products: Product[]
}