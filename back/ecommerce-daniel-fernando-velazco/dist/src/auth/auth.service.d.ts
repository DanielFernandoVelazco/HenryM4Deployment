import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignInAuthDto } from './dto/signIn-auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { SignUpAuthDto } from './dto/signup-auth.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    signIn(signInUser: SignInAuthDto): Promise<{
        token: string;
    }>;
    private createToken;
    signUp(signUpUser: SignUpAuthDto): Promise<User>;
    create(createAuthDto: CreateAuthDto): Promise<string>;
    findAll(): Promise<string>;
    findOne(id: number): Promise<string>;
    update(id: number, updateAuthDto: UpdateAuthDto): Promise<string>;
    remove(id: number): Promise<string>;
}
