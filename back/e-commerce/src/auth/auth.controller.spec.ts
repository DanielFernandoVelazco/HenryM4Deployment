/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { hash } from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { SignUpAuthDto } from './dto/signup-auth.dto';
import { SignInAuthDto } from './dto/signin-auth.dto';
import { UserResponseDto } from 'src/users/dto/response-user.dto';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const hashedPassword = await hash('123456', 10);
    const mockUserService: Partial<UsersService> = {
      findByEmail: (email: string) => {
        if (email === 'johndou@gmail.com') {
          return Promise.resolve({
            email: 'johndou@gmail.com',
            password: hashedPassword,
            administrator: 'user',
          } as User);
        } else {
          return Promise.resolve(undefined);
        }
      },
      create: (entityLike?: Partial<User>): Promise<User> =>
        Promise.resolve({
          ...entityLike,
          administrator: 'user',
          id: '22dba609-4131-4a68-9216-700cbf5d5b80',
        } as User)
    }
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(User),
          useValue: {}
        },
        {
          provide: JwtService,
          useValue: { singAsinc: () => Promise.resolve('mockJwtToken') },
        },
        {
          provide: UsersService,
          useValue: mockUserService,
        }
      ]
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  const mockSignUpUser = new SignUpAuthDto({
    name: 'John Doe',
    password: '123456',
    passwordConfirm: '123456',
    email: 'johndou@gmail.com',
    address: 'Rue de la paix 1',
    phone: '123456789',
  })

  const mockSignInUser = new SignInAuthDto({
    email: 'johndou@gmail.com',
    password: '123456',
  })

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('singUp() should return a new UserResponseDto and create User', async () => {
    const mockRequest = {}
    const user = await controller.signUp(mockSignUpUser, mockRequest);
    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(UserResponseDto);
    expect(user).toHaveProperty('id');
  })

  it('signIn() should return a token', async () => {
    const token = await controller.signIn(mockSignInUser);
    expect(token).toBeDefined();
    expect(token).toHaveProperty('token');
  })
});
