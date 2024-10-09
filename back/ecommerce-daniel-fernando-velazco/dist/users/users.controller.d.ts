import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    findOne(id: string): {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    };
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
