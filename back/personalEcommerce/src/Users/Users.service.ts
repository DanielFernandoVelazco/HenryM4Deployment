/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./Users.repository";
import typeUserObject from "src/VariableTypes/usersObject";

@Injectable()
export class UsersService {


    constructor(private usersRepository: UsersRepository) { }
    getUsers() {
        return this.usersRepository.getUsers();
    }

    getUserById(id: number) {
        return this.usersRepository.getUserById(id);
    }

    createUser(user: Omit<typeUserObject, "id">): Promise<typeUserObject> {
        return this.usersRepository.createUser(user);
    }
}