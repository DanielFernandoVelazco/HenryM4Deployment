import { UsersRepository } from "./Users.repository";
import typeUserObject from "src/VariableTypes/usersObject";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(): Promise<typeUserObject[]>;
    getUserById(id: number): Promise<typeUserObject>;
    createUser(user: Omit<typeUserObject, "id">): Promise<typeUserObject>;
}
