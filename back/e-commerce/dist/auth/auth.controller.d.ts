import { AuthService } from './auth.service';
import { SignInAuthDto } from './dto/signin-dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(Credential: SignInAuthDto): "You are logged in" | "Email or password are incorrect, please try again";
}
