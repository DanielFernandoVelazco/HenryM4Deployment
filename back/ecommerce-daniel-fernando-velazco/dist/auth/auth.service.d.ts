import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { SignInAuthDto } from './dto/signIn-auth.dto';
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UsersService);
    signIn(credentials: SignInAuthDto): "You are logged in" | "Wrong credentials";
    create(createAuthDto: CreateAuthDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}
