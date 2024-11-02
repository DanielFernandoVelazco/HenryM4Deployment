import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity()
export class Category {

    @ApiProperty({
        type: String,
        description: 'The id of the category, asigned by the database',
        required: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @ApiProperty({
        type: String,
        description: 'The name of the category, max 50 characters',
        required: true
    })
    @Column({ length: 50 })
    name: string;

    @OneToMany(() => Product, product => product.category)
    products: Product[];
}