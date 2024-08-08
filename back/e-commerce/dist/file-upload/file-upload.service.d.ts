import { UploadFileDto } from './dto/update-file-upload.dto';
import { CloudinaryService } from 'src/service/cloudinary/cloudinary.service';
export declare class FileUploadService {
    private readonly cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    uploadfile(file: UploadFileDto): Promise<string>;
}
