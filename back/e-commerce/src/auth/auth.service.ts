/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignInAuthDto } from './dto/signin-dto';


@Injectable()
export class AuthService {

  constructor(private readonly userService: UsersService) { }

  signIn(Credentials: SignInAuthDto) {
    const user = this.userService.findOneByEmail(Credentials.email);
    if (user && user.password === Credentials.password) {
      return "You are logged in";
    }
    return "Email or password are incorrect, please try again";
  }
}
