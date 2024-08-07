import { UsersService } from 'src/users/users.service';
import { SignInAuthDto } from './dto/signin-dto';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UsersService);
    signIn(Credentials: SignInAuthDto): Promise<"You are logged in" | "Email or password are incorrect, please try again">;
}
