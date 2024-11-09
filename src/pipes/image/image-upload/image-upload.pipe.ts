import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ImageUploadPipe implements PipeTransform {
  private readonly allowedMimeTypes = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/gif',
  ];
  private readonly maxSizeInBytes = 1600000;
  transform(file: Express.Multer.File) {

    if (!file) throw new BadRequestException('File not found');
    if (!this.allowedMimeTypes.includes(file.mimetype)) throw new BadRequestException('Invalid file type');
    if (file.size > this.maxSizeInBytes) throw new BadRequestException('File too large');

    return file;
  }
}