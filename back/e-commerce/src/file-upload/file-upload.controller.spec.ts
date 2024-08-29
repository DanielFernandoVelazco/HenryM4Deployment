/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service';
import { CloudinaryService } from 'src/service/cloudinary/cloudinary.service';
import { mock } from 'jest-mock-extended';

describe('FileUploadController', () => {
  let controller: FileUploadController;
  let fileUploadService: FileUploadService;

  beforeEach(async () => {

    const mockCloudinaryService = mock<CloudinaryService>();
    const mockFileUploadService = mock<FileUploadService>({});

    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileUploadController],
      providers: [
        {
          provide: FileUploadService,
          useValue: mockFileUploadService,
        },
        {
          provide: CloudinaryService,
          useValue: mockCloudinaryService,
        },
      ],
    }).compile();

    controller = module.get<FileUploadController>(FileUploadController);
    fileUploadService = module.get<FileUploadService>(FileUploadService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
