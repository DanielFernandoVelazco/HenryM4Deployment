import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

export enum Role {
    User = 'user',
    Admin = 'admin',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @Column({ length: 50, nullable: false })
    name: string;

    @Column({ length: 20, nullable: false })
    password: string;

    @Column({ length: 50, nullable: false })
    email: string;

    @Column('text', { nullable: false })
    address: string;

    @Column('int', { nullable: false })
    phone: number;

    @Column({ length: 50, nullable: true })
    coutry: string;

    @Column({ length: 50, nullable: true })
    cityDay: string;

    @OneToMany(() => Order, order => order.user)
    orders: Order[];

    //@Column({ default: Role.User })
    //administrator: string;
}