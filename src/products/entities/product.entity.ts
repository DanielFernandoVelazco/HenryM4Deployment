import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { v4 as uuid } from 'uuid';
import { OrdersDetail } from 'src/order-details/entities/order-detail.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product {
    @ApiProperty({
        type: String,
        description: 'The id of the user, asigned by the database',
        required: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @ApiProperty({
        type: String,
        description: 'The name of the user, max 50 characters',
        required: true
    })
    @Column({ length: 50, nullable: false })
    name: string;

    @ApiProperty({
        type: String,
        description: 'The description of the user',
        required: true
    })
    @Column('text', { nullable: false })
    description: string;

    @ApiProperty({
        type: Number,
        description: 'The price of the user, precision 10, scale 2',
        required: true
    })
    @Column('decimal', { precision: 10, scale: 2, nullable: false })
    price: number;

    @ApiProperty({
        type: Number,
        description: 'The stock of the user',
        required: true
    })
    @Column('int', { nullable: false })
    stock: number;

    @ApiProperty({
        type: String,
        description: 'The image url of the user',
        required: true
    })
    @Column({ default: 'default-image.jpg' })
    imgUrl: string;

    @ManyToOne(() => Category, category => category.products)
    category: Category;

    @ManyToMany(() => OrdersDetail, orderDetail => orderDetail.products)
    @JoinTable()
    orderDetails: OrdersDetail[]
}