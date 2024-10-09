import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UsersRepository);
    create(createUserDto: CreateUserDto): string;
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
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
