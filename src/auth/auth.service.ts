import { HttpException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignInAuthDto } from './dto/signIn-auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { SignUpAuthDto } from './dto/signup-auth.dto';


@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async signIn(signInUser: SignInAuthDto) {
    const user = await this.userService.findByEmail(signInUser.email);
    if (!user) throw new HttpException('User not found', 404);

    const passwordUser = await user.password;
    const passwordSignIn = await signInUser.password
    const isPasswordMatch = passwordUser === passwordSignIn;
    if (!isPasswordMatch) throw new HttpException('Wrong credentials', 400);

    const token = await this.createToken(user);
    return { token };
  }

  private async createToken(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
    }
    return this.jwtService.signAsync(payload);
  }

  async signUp(signUpUser: SignUpAuthDto) {
    if (signUpUser.password !== signUpUser.passwordConfirm) throw new HttpException('Passwords do not match', 400);

    signUpUser.password = await hash(signUpUser.password, 10);
    return this.userService.create(signUpUser);
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