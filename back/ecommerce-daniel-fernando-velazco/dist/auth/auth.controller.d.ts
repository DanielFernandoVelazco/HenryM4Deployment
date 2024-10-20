import { AuthService } from './auth.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignInAuthDto } from './dto/signIn-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signin(credentials: SignInAuthDto): Promise<"You are logged in" | "Wrong credentials">;
    findAll(): Promise<string>;
    findOne(id: string): Promise<string>;
    update(id: string, updateAuthDto: UpdateAuthDto): Promise<string>;
    remove(id: string): Promise<string>;
}
