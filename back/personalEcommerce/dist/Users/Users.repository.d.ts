import typeUserObject from "../VariableTypes/usersObject";
export declare class UsersRepository {
    private users;
    getUsers(): Promise<typeUserObject[]>;
}
