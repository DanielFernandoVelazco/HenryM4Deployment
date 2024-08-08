import { PipeTransform } from '@nestjs/common';
export declare class ImageUploadPipe implements PipeTransform {
    private readonly allowedMimeTypes;
    private readonly maxSizeInBytes;
    transform(file: Express.Multer.File): Express.Multer.File;
}
