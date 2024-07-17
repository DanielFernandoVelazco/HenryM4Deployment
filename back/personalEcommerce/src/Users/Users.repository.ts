/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
    private users = []
    async getUsers() {
        return this.users
    }
}