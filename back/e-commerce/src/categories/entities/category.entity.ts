/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity()
export class Category {
    @ApiProperty({
        type: String,
        description: 'Name of the uuid',
        required: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @ApiProperty({
        type: String,
        description: 'Name of the category',
        required: true
    })
    @Column({
        length: 100,
    })
    name: string;

    @ApiProperty({
        type: String,
        description: 'Name of the product',
        required: true
    })
    @OneToMany(() => Product, product => product.category)
    products: Product[];
}