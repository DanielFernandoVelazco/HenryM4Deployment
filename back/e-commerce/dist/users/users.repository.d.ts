import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateProductDto } from "src/products/dto/update-product.dto";
export declare class UsersRepository {
    private users;
    finAll(): {
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    }[];
    create(createUser: CreateUserDto): number;
    findOneByEmail(email: string): {
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    };
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
    remove(id: number): number;
    update(id: number, updateUserDto: UpdateProductDto): {
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
