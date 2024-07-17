/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()

export class AuthsService {
    getAuths() {
        return 'Get All Auths';
    }
}