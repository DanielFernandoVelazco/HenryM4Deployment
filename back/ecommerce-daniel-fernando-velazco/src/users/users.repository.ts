import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersRepository {
    private users: CreateUserDto[] = [

        {
            id: 1,
            email: 'a@a.com',
            name: 'User1',
            password: 'password1',
            address: 'address1',
            phone: 'phone1',
            country: 'country1',
            city: 'city1',
        },
        {
            id: 2,
            email: 'b@b.com',
            name: 'User2',
            password: 'password2',
            address: 'address2',
            phone: 'phone2',
            country: 'country2',
            city: 'city2',
        },
        {
            id: 3,
            email: 'c@c.com',
            name: 'User3',
            password: 'password3',
            address: 'address3',
            phone: 'phone3',
            country: 'country3',
            city: 'city3',
        },
        {
            id: 4,
            email: 'd@d.com',
            name: 'User4',
            password: 'password4',
            address: 'address4',
            phone: 'phone4',
            country: 'country4',
            city: 'city4',
        }
    ]

    arrayUsers = this.users.map(({ password, ...user }) => user);

    create(createUser: CreateUserDto) {
        const id = this.arrayUsers.length + 1;
        const userAdd = { id, ...createUser };
        this.arrayUsers = [...this.arrayUsers, userAdd];
        return userAdd;
    }

    findAll({ page, limit }: { page: number; limit: number }) {
        return this.arrayUsers.slice(page, page + limit);
    }

    findOne(id: number) {
        return this.arrayUsers.find((user) => user.id === id)
    }

    update(id: number, updateUser: UpdateUserDto) {
        const user = this.findOne(id);
        const upUser = { ...user, ...updateUser };
        this.arrayUsers = this.arrayUsers.map((user) => (user.id === id ? upUser : user));
        return upUser;
    }

    remove(id: number) {
        this.arrayUsers = this.arrayUsers.filter((user) => user.id !== id);
        return id;
    }
}