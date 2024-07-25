/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
//import UserEntity from "src/entities/users.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateProductDto } from "src/products/dto/update-product.dto";


@Injectable()
export class UsersRepository {

    private users = [
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

    create(createUser: CreateUserDto) {
        const newUser = {
            id: this.users.length + 1,
            country: createUser.country || 'Default Country',
            city: createUser.city || 'Default City',
            ...createUser
        }
        this.users.push(newUser)
        return newUser.id
    }

    findOneByEmail(email: string) {
        return this.users.find(user => user.email === email)
    }

    findOne(id: number) {
        return this.users.find(user => user.id === id)
    }


    remove(id: number) {
        this.users = this.users.filter(user => user.id !== id)
        return id
    }

    update(id: number, updateUserDto: UpdateProductDto) {
        const user = this.findOne(id)
        const updateUser = {
            ...user,
            ...updateUserDto,
        }
        this.users = this.users.map(user => user.id === id ? updateUser : user)
        return updateUser
    }
}