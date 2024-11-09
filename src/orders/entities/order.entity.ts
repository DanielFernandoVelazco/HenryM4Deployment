import { ApiProperty } from "@nestjs/swagger";
import { OrdersDetail } from "src/order-details/entities/order-detail.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, Column } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity()
export class Order {
    @ApiProperty({
        type: String,
        description: 'The id of the order, asigned by the database',
        required: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @Column()
    date: Date;

    @OneToOne(() => OrdersDetail, ordersDetail => ordersDetail.order)
    ordersDetail: OrdersDetail
}