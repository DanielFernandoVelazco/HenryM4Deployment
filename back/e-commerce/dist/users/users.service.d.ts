import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserResponseDto } from './dto/response-user.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<UserResponseDto[]>;
    findOne(id: string): Promise<UserResponseDto | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<UserResponseDto>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    findOneBy(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    pag(page: any, limit: any): {
        page: any;
        limit: any;
    };
}
