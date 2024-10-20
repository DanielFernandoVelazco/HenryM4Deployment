import { Product } from "src/products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity()
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @Column({ length: 50 })
    name: string;

    @OneToMany(() => Product, product => product.category)
    products: Product[];
}