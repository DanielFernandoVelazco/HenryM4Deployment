import { ApiProperty } from '@nestjs/swagger';
import { OrdersDetail } from 'src/order-details/entities/order-detail.entity';

export class OrderResponseDto {

    @ApiProperty({
        type: String,
        description: 'The id of the order, asigned by the database',
        required: true
    })
    id: string

    @ApiProperty({
        type: Number,
        description: 'The price of the order',
        required: true
    })
    price: number

    @ApiProperty({
        type: Array,
        description: 'The products of the order',
        required: true
    })
    products: object[]

    @ApiProperty({
        type: Object,
        description: 'The order of the order',
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