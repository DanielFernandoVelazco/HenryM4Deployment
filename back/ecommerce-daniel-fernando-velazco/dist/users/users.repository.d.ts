export declare class UsersRepository {
    private users;
    arrayUsers: {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    }[];
    findAll(): {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    }[];
    findOne(id: number): {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    };
}
