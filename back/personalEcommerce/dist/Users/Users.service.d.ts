import { UsersRepository } from "./Users.repository";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(): Promise<import("../VariableTypes/usersObject").default[]>;
}
