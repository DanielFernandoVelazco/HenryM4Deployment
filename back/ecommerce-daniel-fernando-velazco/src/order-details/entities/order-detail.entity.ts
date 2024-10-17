import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToOne } from 'typeorm';
import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';

@Entity()
export class OrderDetails {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @OneToOne(() => Order, (order) => order.orderDetails)
    order: Order;

    @ManyToMany(() => Product, (product) => product.orderDetails)
    products: Product[];
}
