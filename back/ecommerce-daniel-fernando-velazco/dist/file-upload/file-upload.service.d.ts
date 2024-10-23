import { CloudinaryService } from 'src/service/cloudinary/cloudinary.service';
import { uploadFileDto } from './dto/update-file.dto';
export declare class FileUploadService {
    private readonly cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    uploadFile(file: uploadFileDto): Promise<string>;
}
