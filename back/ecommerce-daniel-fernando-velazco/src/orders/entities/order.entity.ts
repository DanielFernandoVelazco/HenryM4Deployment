/*
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { OrderDetails } from 'src/order-details/entities/order-detail.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @Column()
    date: Date;

    @OneToOne(() => OrderDetails, ordersDetail => ordersDetail.order)
    ordersDetail: OrderDetails
}
*/

import { OrdersDetail } from "src/order-details/entities/order-detail.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, Column } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @Column()
    date: Date;

    @OneToOne(() => OrdersDetail, ordersDetail => ordersDetail.order)
    ordersDetail: OrdersDetail
}