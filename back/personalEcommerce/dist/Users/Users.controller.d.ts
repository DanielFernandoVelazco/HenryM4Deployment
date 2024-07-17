import { UsersService } from "./Users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<import("../VariableTypes/usersObject").default[]>;
}
