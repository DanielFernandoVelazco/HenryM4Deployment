import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadService } from './file-upload.service';
import { CloudinaryService } from 'src/service/cloudinary/cloudinary.service';
import { uploadFileDto } from './dto/update-file.dto';

describe('FileUploadService', () => {
  let fileUploadService: FileUploadService;
  let cloudinaryService: CloudinaryService;

  const mockCloudinaryService = {
    uploadFile: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FileUploadService,
        { provide: CloudinaryService, useValue: mockCloudinaryService },
      ],
    }).compile();

    fileUploadService = module.get<FileUploadService>(FileUploadService);
    cloudinaryService = module.get<CloudinaryService>(CloudinaryService);
  });

  it('should be defined', () => {
    expect(fileUploadService).toBeDefined();
  });

  describe('uploadFile', () => {
    it('should call CloudinaryService.uploadFile with correct parameters', async () => {
      const file: uploadFileDto = {
        fieldname: 'file',
        originalname: 'test-file.txt',
        mimetype: 'text/plain',
        buffer: Buffer.from('test file content'),
        size: 1234,
      };

      mockCloudinaryService.uploadFile.mockResolvedValueOnce({ url: 'http://cloudinary.com/test-file.txt' });

      const result = await fileUploadService.uploadFile(file);

      expect(cloudinaryService.uploadFile).toHaveBeenCalledWith(file.buffer, file.originalname);
      expect(result).toEqual({ url: 'http://cloudinary.com/test-file.txt' });
    });
  });
});
