import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { SignInAuthDto } from './dto/signIn-auth.dto';

@Injectable()
export class AuthService {

  constructor(private readonly usersService: UsersService) { }

  signIn(credentials: SignInAuthDto) {
    const user = this.usersService.findOneByEmail(credentials.email);
    if (user && user.password === credentials.password) {
      return "You are logged in"
    }
    return "Wrong credentials"
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auths`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}