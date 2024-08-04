/* eslint-disable prettier/prettier */

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
//import { OrdersDetail } from 'src/orders-details/entities/orders-detail.entity';
import { v4 as uuid } from 'uuid';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    stock: number;

    @Column({
        nullable: true,
    })
    imgUrl: string;

    @ManyToOne(() => Category, category => category.products)
    category: Category;

    //@ManyToMany(() => OrdersDetail, orderDetail => orderDetail.products)
    //@JoinTable()
    //orderDetails: OrdersDetail[]
}
