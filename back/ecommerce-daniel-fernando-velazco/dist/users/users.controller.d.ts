import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    findAll(): {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
    }[];
    findOne(id: string): {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
    };
    update(id: string, updateUser: UpdateUserDto): string;
    remove(id: string): string;
}
