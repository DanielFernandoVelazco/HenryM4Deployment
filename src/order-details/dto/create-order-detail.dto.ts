import { ApiProperty } from "@nestjs/swagger"

export class CreateOrderDetailDto {

    @ApiProperty({
        type: Number,
        description: 'The price of the order detail',
        required: true
    })
    price: number

    @ApiProperty({
        type: Object,
        description: 'The order of the order detail',
        required: true
    })
    order: object

    @ApiProperty({
        type: Array,
        description: 'The products of the order detail',
        required: true
    })
    products: Array<object>
}