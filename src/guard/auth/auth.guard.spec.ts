import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ExecutionContext } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let jwtService: JwtService;
  let configService: ConfigService;

  beforeEach(() => {
    jwtService = {
      verify: jest.fn(),
    } as unknown as JwtService;

    configService = {
      get: jest.fn().mockReturnValue('test-secret'),
    } as unknown as ConfigService;

    authGuard = new AuthGuard(jwtService, configService);
  });

  describe('canActivate', () => {
    it('should throw UnauthorizedException if token not found', async () => {
      const context = {
        switchToHttp: () => ({
          getRequest: () => ({ headers: {} }),
        }),
      } as ExecutionContext;

      await expect(authGuard.canActivate(context)).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException if token is invalid', async () => {
      const context = {
        switchToHttp: () => ({
          getRequest: () => ({
            headers: { authorization: 'Bearer invalid-token' },
          }),
        }),
      } as ExecutionContext;

      (jwtService.verify as jest.Mock).mockRejectedValue(new Error('Invalid token'));

      await expect(authGuard.canActivate(context)).rejects.toThrow(UnauthorizedException);
    });

    it('should add user to request if token is valid', async () => {
      const request = {
        headers: { authorization: 'Bearer valid-token' },
      } as Request;

      const context = {
        switchToHttp: () => ({
          getRequest: () => request,
        }),
      } as ExecutionContext;

      const mockPayload = { userId: 1, username: 'testuser' };
      (jwtService.verify as jest.Mock).mockResolvedValue(mockPayload);

      await authGuard.canActivate(context);

      expect(request['user']).toEqual(mockPayload);
    });

  });
})