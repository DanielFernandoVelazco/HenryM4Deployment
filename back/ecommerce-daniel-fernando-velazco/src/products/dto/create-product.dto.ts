import { IsNumber, IsString, IsBoolean } from 'class-validator';

export class CreateProductDto {

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
