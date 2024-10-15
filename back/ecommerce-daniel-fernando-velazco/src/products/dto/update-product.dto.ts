import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateProductDto {

    @IsNumber()
    id: number

    @IsString()
    name: string

    @IsString()
    description: string

    @IsNumber()
    price: number

    @IsBoolean()
    stock: boolean

    @IsString()
    imlUrl: string
}
