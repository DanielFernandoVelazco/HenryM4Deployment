/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UploadFileDto } from './dto/update-file-upload.dto';
import { CloudinaryService } from 'src/service/cloudinary/cloudinary.service';

@Injectable()
export class FileUploadService {

  constructor(private readonly cloudinaryService: CloudinaryService) { }

  async uploadfile(file: UploadFileDto) {
    return this.cloudinaryService.uploadFile(file.buffer, file.originalname)
  }
}
