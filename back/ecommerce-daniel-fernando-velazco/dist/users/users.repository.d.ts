export declare class UsersRepository {
    private users;
    findAll(): {
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    }[];
    findOne(id: number): {
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    };
}
