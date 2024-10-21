import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class ValidationPipesPipe implements PipeTransform {
    transform(value: any, { metatype }: ArgumentMetadata): Promise<any>;
    private toValidate;
}
