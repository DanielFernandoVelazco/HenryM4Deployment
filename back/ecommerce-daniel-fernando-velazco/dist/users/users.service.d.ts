import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UsersRepository);
    create(createUserDto: CreateUserDto): {
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
    update(id: number, updateUser: UpdateUserDto): string;
    remove(id: number): string;
}
