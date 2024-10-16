import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersRepository {
    private users;
    arrayUsers: {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
    }[];
    create(createUser: CreateUserDto): {
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
    };
    findAll({ page, limit }: {
        page: number;
        limit: number;
    }): {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
    }[];
    findOne(id: number): {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
    };
    update(id: number, updateUser: UpdateUserDto): {
        id: number;
        email: string;
        name: string;
        password?: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
    };
    remove(id: number): number;
    findOneByEmail(email: string): CreateUserDto;
}
