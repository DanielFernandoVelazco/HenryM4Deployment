/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadService } from './file-upload.service';
import { CloudinaryService } from 'src/service/cloudinary/cloudinary.service';
import { mock } from 'jest-mock-extended';

describe('FileUploadService', () => {
  let service: FileUploadService;

  const mockCloudinaryService = mock<CloudinaryService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FileUploadService,
        {
          provide: CloudinaryService,
          useValue: mockCloudinaryService,
        },
      ],
    }).compile();

    service = module.get<FileUploadService>(FileUploadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});