/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger"

export class CreateOrderDetailDto {
    @ApiProperty({
        type: String,
        description: 'Price of the order-detail',
        required: true
    })
    price: number

    @ApiProperty({
        type: String,
        description: 'Order of the order-detail',
        required: true
    })
    order: object

    @ApiProperty({
        type: String,
        description: 'Product of the order-detail',
        required: true
    })
    products: Array<object>
}
