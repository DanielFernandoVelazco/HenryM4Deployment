/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    price: number;

    @IsNumber()
    stock: number;

    @IsString()
    product: string;

    @IsString()
    imgUrl: string;
}
