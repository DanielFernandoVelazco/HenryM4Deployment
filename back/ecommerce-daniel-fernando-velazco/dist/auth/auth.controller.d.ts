import { AuthService } from './auth.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignInAuthDto } from './dto/signIn-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signin(credentials: SignInAuthDto): "You are logged in" | "Wrong credentials";
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAuthDto: UpdateAuthDto): string;
    remove(id: string): string;
}
