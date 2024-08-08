/* eslint-disable prettier/prettier */
import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @Column({
        length: 100,
    })
    name: string;

    @Column({ nullable: true })
    password: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column({ nullable: true })
    coutry: string;

    @Column({ nullable: true })
    city: string;

    @OneToMany(() => Order, order => order.user)
    orders: Order[];

    @Column()
    createdAt: string;
}