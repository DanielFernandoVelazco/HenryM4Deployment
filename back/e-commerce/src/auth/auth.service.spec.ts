/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { SignUpAuthDto } from './dto/signup-auth.dto';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const mockUsersService: Partial<UsersService> = {
      findByEmail: () => Promise.resolve(undefined),
      create: (entityLike?: Partial<User>) =>
        Promise.resolve({
          ...entityLike,
          administrator: 'user',
          id: '22dba609-4131-4a68-9216-700cbf5d5b80'
        } as User),
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(User),
          useValue: {}
        },
        {
          provide: JwtService,
          useValue: {}
        },
        {
          provide: UsersService,
          useValue: mockUsersService
        }
      ]
    }).compile()

    service = module.get<AuthService>(AuthService);
  });

  const mockUser = new SignUpAuthDto({
    name: 'John Doe',
    password: '123456',
    passwordConfirm: '123456',
    email: 'johndou@gmail.com',
    address: 'Rue de la paix 1',
    phone: '123456789',
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
