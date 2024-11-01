import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/response-users.dto';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<User>;

  const mockUserRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOneBy: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    findOne: jest.fn(),
  };

  const mockUser = {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    password: 'securepassword',
    address: '123 Test St',
    phone: 123 - 456 - 7890,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const createUserDto: CreateUserDto = {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        password: 'securepassword',
        address: '123 Test St',
        phone: 123 - 456 - 7890,
      };
      mockUserRepository.create.mockReturnValue(mockUser);
      mockUserRepository.save.mockResolvedValue(mockUser);

      const result = await service.create(createUserDto);
      expect(result).toEqual(mockUser);
      expect(mockUserRepository.create).toHaveBeenCalledWith(createUserDto);
      expect(mockUserRepository.save).toHaveBeenCalledWith(mockUser);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      mockUserRepository.find.mockResolvedValue([mockUser]);

      const result = await service.findAll();
      expect(result).toEqual([new UserResponseDto(mockUser)]);
      expect(mockUserRepository.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a user by id', async () => {
      mockUserRepository.findOneBy.mockResolvedValue(mockUser);

      const result = await service.findOne('1');
      expect(result).toEqual(new UserResponseDto(mockUser));
      expect(mockUserRepository.findOneBy).toHaveBeenCalledWith({ id: '1' });
    });

    it('should return null if user not found', async () => {
      mockUserRepository.findOneBy.mockResolvedValue(null);

      const result = await service.findOne('999');
      expect(result).toBeNull();
      expect(mockUserRepository.findOneBy).toHaveBeenCalledWith({ id: '999' });
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const updateUserDto: UpdateUserDto = { name: 'Updated User' };
      mockUserRepository.update.mockResolvedValue({ affected: 1 });
      mockUserRepository.findOneBy.mockResolvedValue({ ...mockUser, ...updateUserDto });

      const result = await service.update('1', updateUserDto);
      expect(result).toEqual(new UserResponseDto({ ...mockUser, ...updateUserDto }));
      expect(mockUserRepository.update).toHaveBeenCalledWith('1', updateUserDto);
    });
  });

  describe('remove', () => {
    it('should remove a user', async () => {
      mockUserRepository.delete.mockResolvedValue({ affected: 1 });

      const result = await service.remove('1');
      expect(result).toEqual({ affected: 1 });
      expect(mockUserRepository.delete).toHaveBeenCalledWith('1');
    });
  });

  describe('findByEmail', () => {
    it('should return a user by email', async () => {
      mockUserRepository.findOne.mockResolvedValue(mockUser);

      const result = await service.findByEmail('test@example.com');
      expect(result).toEqual(mockUser);
      expect(mockUserRepository.findOne).toHaveBeenCalledWith({ where: { email: 'test@example.com' } });
    });

    it('should return null if user not found by email', async () => {
      mockUserRepository.findOne.mockResolvedValue(null);

      const result = await service.findByEmail('notfound@example.com');
      expect(result).toBeNull();
      expect(mockUserRepository.findOne).toHaveBeenCalledWith({ where: { email: 'notfound@example.com' } });
    });
  });
});
