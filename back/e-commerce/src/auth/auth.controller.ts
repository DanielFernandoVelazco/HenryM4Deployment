/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInAuthDto } from './dto/signin-auth.dto';
import { SignUpAuthDto } from './dto/signup-auth.dto';
import { UserResponseDto } from 'src/users/dto/response-user.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signin')
  async signIn(@Body() credentials: SignInAuthDto) {
    return this.authService.signIn(credentials);
  }

  @Post('signup')
  async signUp(@Body() signUpUser: SignUpAuthDto, @Req() request) {
    const user = await this.authService.signUp(signUpUser);
    return new UserResponseDto(user)
  }

}
