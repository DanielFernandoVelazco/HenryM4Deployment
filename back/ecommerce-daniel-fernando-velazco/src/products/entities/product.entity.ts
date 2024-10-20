import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { v4 as uuid } from 'uuid';
import { OrdersDetail } from 'src/order-details/entities/order-detail.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @Column({ length: 50, nullable: false })
    name: string;

    @Column('text', { nullable: false })
    description: string;

    @Column('decimal', { precision: 10, scale: 2, nullable: false })
    price: number;

    @Column('int', { nullable: false })
    stock: number;

    @Column({ default: 'default-image.jpg' })
    imgUrl: string;

    @ManyToOne(() => Category, category => category.products)
    category: Category;

    @ManyToMany(() => OrdersDetail, orderDetail => orderDetail.products)
    @JoinTable()
    orderDetails: OrdersDetail[]
}