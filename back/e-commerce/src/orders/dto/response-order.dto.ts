/* eslint-disable prettier/prettier */

import { ApiProperty } from '@nestjs/swagger';
import { OrdersDetail } from 'src/order-details/entities/order-detail.entity';

export class OrderResponseDto {
    @ApiProperty({
        type: String,
        description: 'Id of the order',
        required: true
    })
    id: string

    @ApiProperty({
        type: String,
        description: 'Price of the order',
        required: true
    })
    price: number

    @ApiProperty({
        type: String,
        description: 'Products of the order',
        required: true
    })
    products: object[]

    @ApiProperty({
        type: String,
        description: 'Order of the client',
        required: true
    })
    order: {
        id: string
        date: Date
        user: {
            id: string
        }
    }

    constructor(orderDetail: OrdersDetail) {
        this.id = orderDetail.id
        this.price = orderDetail.price
        this.products = orderDetail.products
        this.order = {
            id: orderDetail.order.id,
            date: orderDetail.order.date,
            user: {
                id: orderDetail.order.user.id,
            },
        }
    }
}
