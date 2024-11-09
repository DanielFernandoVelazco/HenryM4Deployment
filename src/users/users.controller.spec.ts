import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt'; // Asegúrate de que esto esté correctamente importado
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

describe('UsersController', () => {
  let usersController: UsersController;

  const mockUsersService = {};
  const mockJwtService = {};
  const mockConfigService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService, useValue: mockJwtService },
        { provide: ConfigService, useValue: mockConfigService },
        {
          provide: AuthGuard,
          useValue: jest.fn().mockImplementation(() => ({
            canActivate: jest.fn().mockReturnValue(true),
          })),
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
  });

  it('should create a user', async () => { });
  it('should return an array of users', async () => { });

});
