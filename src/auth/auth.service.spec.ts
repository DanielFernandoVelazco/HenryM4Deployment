import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { SignUpAuthDto } from './dto/signup-auth.dto';
import { create } from 'domain';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    /*const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
    */
    const mockUserService: Partial<UsersService> = {
      findByEmail: () => Promise.resolve(undefined),
      create: (entityLike?: Partial<User>) =>
        Promise.resolve({
          ...entityLike,
          administrator: 'user',
          id: '1',
        } as User),
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(User),
          useValue: [],
        },
        {
          provide: JwtService,
          useValue: [],
        },
        {
          provide: UsersService,
          useValue: mockUserService,
        }
      ]
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  const mockUser = new SignUpAuthDto({
    name: 'John Doe',
    password: '123456',
    passwordConfirm: '123456',
    email: 'a@a.com',
    address: 'address',
    phone: 123456789,
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('signUp() create a new user with encrypted password', async () => {
    const user = await service.signUp(mockUser);
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('administrator', 'user');
    expect(user).toHaveProperty('password');
  })
});
