import { ApiProperty } from "@nestjs/swagger";
import { Order } from "src/orders/entities/order.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity()
export class OrdersDetail {
    @ApiProperty({
        type: String,
        description: 'The id of the order detail, asigned by the database',
        required: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @ApiProperty({
        type: Number,
        description: 'The price of the order detail',
        required: true
    })
    @Column()
    price: number;

    @OneToOne(() => Order, order => order.ordersDetail)
    @JoinColumn()
    order: Order;

    @ManyToMany(() => Product, product => product.orderDetails)
    products: Product[]
}