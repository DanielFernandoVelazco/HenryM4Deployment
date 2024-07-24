import { UsersService } from "./Users.service";
import typeUserObject from "src/VariableTypes/usersObject";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<typeUserObject[]>;
    getUserById(id: string): Promise<typeUserObject>;
    createUser(user: typeUserObject, req: any): Promise<typeUserObject>;
}
