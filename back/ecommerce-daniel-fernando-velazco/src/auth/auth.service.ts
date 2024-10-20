import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignInAuthDto } from './dto/signIn-auth.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

  constructor(private readonly userService: UsersService) { }

  async signIn(credentials: SignInAuthDto) {
    const user = await this.userService.findByEmail(credentials.email);
    if (user && user.password === credentials.password) {
      return "You are logged in"
    }
    return "Wrong credentials"
  }

  async create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  async findAll() {
    return `This action returns all auths`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  async update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  async remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}