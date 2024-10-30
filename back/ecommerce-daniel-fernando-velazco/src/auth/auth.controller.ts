import { Controller, Get, Post, Body, Patch, Param, Delete, Req, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignInAuthDto } from './dto/signIn-auth.dto';
import { SignUpAuthDto } from './dto/signup-auth.dto';
import { UserResponseDto } from 'src/users/dto/response-users.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) { }

  @Post('signin')
  async signin(@Body() credentials: SignInAuthDto) {
    return this.authService.signIn(credentials);
  }

  @Post('singup')
  async signUp(@Body() signUpUser: SignUpAuthDto, @Req() request) {
    const user = await this.authService.signUp(signUpUser);
    return new UserResponseDto(user);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}

