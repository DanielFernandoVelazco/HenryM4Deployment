/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import typeUserObject from "../VariableTypes/usersObject";

@Injectable()
export class UsersRepository {

    private users: typeUserObject[] = [
        {
            id: 1,
            email: '6tVHh@example.com',
            name: 'John',
            password: '1234',
            address: 'Rue de la paix 1',
            phone: '0606060606',
            country: 'France',
            city: 'Paris'
        },
        {
            id: 2,
            email: '6tVHh@example.com',
            name: 'Jane',
            password: '1234',
            address: 'Rue de la paix 1',
            phone: '0606060606',
            country: 'France',
            city: 'Paris'
        },
        {
            id: 3,
            email: '6tVHh@example.com',
            name: 'Jack',
            password: '1234',
            address: 'Rue de la paix 1',
            phone: '0606060606',
            country: 'France',
            city: 'Paris'
        }
    ]
    async getUsers() {
        return this.users
    }

    async getUserById(id: number) {
        return this.users.find(user => user.id === id)
    }

    async createUser(user: Omit<typeUserObject, "id">) {
        const id = this.users.length + 1;
        this.users = [... this.users, { id, ...user }];
        return { id, ...user };
    }
}