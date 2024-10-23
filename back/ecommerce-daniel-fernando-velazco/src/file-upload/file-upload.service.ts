import { Injectable } from '@nestjs/common';
import { CloudinaryService } from 'src/service/cloudinary/cloudinary.service';
import { uploadFileDto } from './dto/update-file.dto';

@Injectable()
export class FileUploadService {
    constructor(private readonly cloudinaryService: CloudinaryService) { }

    async uploadFile(file: uploadFileDto) {
        return this.cloudinaryService.uploadFile(file.buffer, file.originalname);
    }

}