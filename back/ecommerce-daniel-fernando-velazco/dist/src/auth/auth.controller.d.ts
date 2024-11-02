import { AuthService } from './auth.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignInAuthDto } from './dto/signIn-auth.dto';
import { SignUpAuthDto } from './dto/signup-auth.dto';
import { UserResponseDto } from 'src/users/dto/response-users.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signin(credentials: SignInAuthDto): Promise<{
        token: string;
    }>;
    signUp(signUpUser: SignUpAuthDto, request: any): Promise<UserResponseDto>;
    findAll(): Promise<string>;
    getAuth0Protected(request: any): string;
    findOne(id: string): Promise<string>;
    update(id: string, updateAuthDto: UpdateAuthDto): Promise<string>;
    remove(id: string): Promise<string>;
}
