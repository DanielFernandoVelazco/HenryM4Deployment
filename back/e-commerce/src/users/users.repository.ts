/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import UserEntity from "src/entities/users.entity";


@Injectable()
export class UsersRepository {
    private users: UserEntity[] = [
        {
            id: 1,
            email: 'a@a.com',
            name: 'User 1',
            password: '123456',
            address: 'Calle 1',
            phone: '123456789',
            country: 'Spain',
            city: 'Barcelona'
        },
        {
            id: 2,
            email: 'b@b.com',
            name: 'User 2',
            password: '123456',
            address: 'Calle 2',
            phone: '123456789',
            country: 'Spain',
            city: 'Barcelona'
        },
        {
            id: 3,
            email: 'c@c.com',
            name: 'User 3',
            password: '123456',
            address: 'Calle 3',
            phone: '123456789',
            country: 'Spain',
            city: 'Barcelona'
        }
    ]

    finAll() {
        return this.users
    }
}