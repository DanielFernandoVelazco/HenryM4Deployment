import typeUserObject from "../VariableTypes/usersObject";
export declare class UsersRepository {
    private users;
    getUsers(): Promise<typeUserObject[]>;
    getUserById(id: number): Promise<typeUserObject>;
    createUser(user: Omit<typeUserObject, "id">): Promise<{
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string | undefined;
        city: string | undefined;
        id: number;
    }>;
}
