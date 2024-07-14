import { AuthsService } from "./Auth.service";
export declare class AuthsController {
    private readonly authsService;
    constructor(authsService: AuthsService);
    getUsers(): string;
}
