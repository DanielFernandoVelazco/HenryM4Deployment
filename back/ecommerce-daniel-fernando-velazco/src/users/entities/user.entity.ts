import { ApiProperty } from "@nestjs/swagger";
import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

export enum Role {
    User = 'user',
    Admin = 'admin',
}

@Entity()
export class User {
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
        description: 'The password of the user, max 20 characters',
        required: true
    })
    @Column({ length: 20, nullable: false })
    password: string;

    @ApiProperty({
        type: String,
        description: 'The email of the user, max 50 characters',
        required: true
    })
    @Column({ length: 50, nullable: false })
    email: string;

    @ApiProperty({
        type: String,
        description: 'The address of the user',
        required: true
    })
    @Column('text', { nullable: false })
    address: string;

    @ApiProperty({
        type: Number,
        description: 'The phone of the user',
        required: true
    })
    @Column('int', { nullable: false })
    phone: number;

    @ApiProperty({
        type: String,
        description: 'The country of the user, max 50 characters',
        required: false
    })
    @Column({ length: 50, nullable: true })
    coutry: string;

    @ApiProperty({
        type: String,
        description: 'The city of the user, max 50 characters',
        required: false
    })
    @Column({ length: 50, nullable: true })
    city: string;

    @OneToMany(() => Order, order => order.user)
    orders: Order[];

    @Column({ default: Role.User })
    administrator: string;
}