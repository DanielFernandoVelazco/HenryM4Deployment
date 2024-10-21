import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ValidationPipesPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
