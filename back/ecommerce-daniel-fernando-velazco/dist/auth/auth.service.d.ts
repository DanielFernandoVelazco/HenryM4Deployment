import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignInAuthDto } from './dto/signIn-auth.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UsersService);
    signIn(credentials: SignInAuthDto): Promise<"You are logged in" | "Wrong credentials">;
    create(createAuthDto: CreateAuthDto): Promise<string>;
    findAll(): Promise<string>;
    findOne(id: number): Promise<string>;
    update(id: number, updateAuthDto: UpdateAuthDto): Promise<string>;
    remove(id: number): Promise<string>;
}
